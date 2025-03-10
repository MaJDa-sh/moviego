'use client';

import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { Container } from '@mui/material';
import {
  getTrendingMovies,
  getMoviesByGenre,
  searchMovies,
} from '../actions/MoviesActions';
import { MovieList } from '@/types/movie';
import SearchBar from '@/components/atoms/searchBar/SearchBar';
import SelectComponent from '@/components/atoms/select/Select';
import {
  PrimaryButton,
  SecondaryButton,
} from '@/components/atoms/button/Button';
import { useGenresStore } from '@/store/useGenresStore';
import ListedMovies from '@/components/organisms/listedMovies/ListedMovies';
import MovieCarousel from '@/components/organisms/movieCarousel/MovieCarousel';
import LoadingMovieBanners from '@/components/organisms/movieBanners/LoadingMovieBanners';
import LoadingBar from '@/components/atoms/loadingBar/LoadingBar';

const MovieBanners = dynamic(
  () => import('@/components/organisms/movieBanners/MovieBanners'),
  {
    ssr: false,
    loading: () => <LoadingMovieBanners />,
  },
);

const sortingData = {
  'popularity.asc': 'Popularity ▲',
  'popularity.desc': 'Popularity ▼',
  'title.asc': 'Title ▲',
  'title.desc': 'Title ▼',
  'vote_average.asc': 'Rating ▲',
  'vote_average.desc': 'Rating ▼',
  'primary_release_date.asc': 'Release Date ▲',
  'primary_release_date.desc': 'Release Date ▼',
};

export default function Home() {
  const router = useRouter();
  const genres = useGenresStore((state) => state.genres);

  const [trendingMovies, setTrendingMovies] = useState<MovieList | null>(null);
  const [genreMovies, setGenreMovies] = useState<Record<string, MovieList>>({});
  const [searchResults, setSearchResults] = useState<MovieList | null>(null);
  const [loading, setLoading] = useState(true);

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchedFor, setSearchedFor] = useState<string>('');
  const [selectedSort, setSelectedSort] = useState<string>('popularity.desc');

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true);
      try {
        const data = await getTrendingMovies();
        setTrendingMovies(data);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  const handleDiscover = async () => {
    try {
      setLoading(true);
      const genreResults: Record<string, MovieList> = {};
      for (const genreId of selectedGenres) {
        genreResults[genreId] = await getMoviesByGenre(genreId, selectedSort);
      }
      setGenreMovies(genreResults);
      setSearchResults(null);
    } catch (error) {
      console.error('Error fetching movies by genre:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    setSearchedFor(searchQuery);
    setLoading(true);
    if (!searchQuery.trim()) {
      try {
        const data = await getTrendingMovies();
        setTrendingMovies(data);
        setSearchResults(null);
        setGenreMovies({});
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      } finally {
        setLoading(false);
      }
      return;
    }

    try {
      const data = await searchMovies(searchQuery);
      setSearchResults(data);
      setGenreMovies({});
    } catch (error) {
      console.error('Error searching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFeelingLucky = () => {
    if (trendingMovies && trendingMovies.results.length > 0) {
      const randomMovie =
        trendingMovies.results[
          Math.floor(Math.random() * trendingMovies.results.length)
        ];
      router.push(`/movie/${randomMovie.id}`);
    }
  };

  return (
    <>
      <Container
        maxWidth={false}
        className="grid min-h-svh content-between py-10"
      >
        <div className="mx-auto">
          <p className="text-2xl md:text-6xl font-thin">
            Searching for something to watch?
          </p>
          <p className="text-3xl md:text-7xl font-light text-primary">
            We got you.
          </p>
          <p className="max-w-10/12 mt-4 font-extralight text-balance">
            Explore a world of cinema with{' '}
            <span className="font-normal">MovieGo</span>. Whether you're in the
            mood for action, comedy, or drama, we've got you covered with a
            variety of options.
          </p>
        </div>

        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />

        <Container className="flex flex-col">
          <div className="md:flex justify-center">
            <SelectComponent
              data={genres}
              selectedData={selectedGenres}
              setSelectedData={setSelectedGenres}
            />
            <SelectComponent
              data={sortingData}
              selectedData={selectedSort}
              setSelectedData={setSelectedSort}
              singleSelect
            />
          </div>

          <div className="flex justify-center gap-4">
            <PrimaryButton onClick={handleDiscover}>
              Discover Movies
            </PrimaryButton>
            <SecondaryButton onClick={handleFeelingLucky}>
              Feeling Lucky?
            </SecondaryButton>
          </div>
        </Container>

        {loading ? (
          <div className="flex justify-center my-8">
            <LoadingMovieBanners />
          </div>
        ) : (
          <Suspense fallback={<LoadingMovieBanners />}>
            {trendingMovies && (
              <MovieBanners movies={trendingMovies.results.slice(0, 3)} />
            )}
          </Suspense>
        )}
      </Container>

      {loading ? (
        <div className="flex justify-center my-8">
          <LoadingBar />
        </div>
      ) : (
        <>
          {searchResults ? (
            <ListedMovies
              movies={searchResults.results}
              searchResult={searchedFor}
            />
          ) : (
            <>
              {Object.entries(genreMovies).map(([genreId, movies]) => (
                <MovieCarousel
                  movies={movies.results}
                  genre_id={Number(genreId)}
                />
              ))}

              {Object.keys(genreMovies).length === 0 &&
                !searchResults &&
                trendingMovies && (
                  <MovieCarousel
                    genre_id={-1}
                    movies={trendingMovies.results.slice(3)}
                  />
                )}
            </>
          )}
        </>
      )}
    </>
  );
}
