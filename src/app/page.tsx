'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  getTrendingMovies,
  getMoviesByGenre,
  searchMovies,
} from '../actions/MoviesActions';
import { MovieList } from '@/types/movie';
import HeroSection from '@/components/organisms/heroSection/HeroSection';
import MovieListSection from '@/components/organisms/movieListSection/MovieListSection';

export default function Home() {
  const router = useRouter();

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
      <HeroSection
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        handleDiscover={handleDiscover}
        handleFeelingLucky={handleFeelingLucky}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        trendingMovies={trendingMovies?.results.slice(0, 3)}
        loading={loading}
      />

      <MovieListSection
        loading={loading}
        searchedFor={searchedFor}
        searchResults={searchResults}
        genreMovies={genreMovies}
        trendingMovies={trendingMovies}
      />
    </>
  );
}
