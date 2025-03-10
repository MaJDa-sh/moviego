import LoadingBar from '@/components/atoms/loadingBar/LoadingBar';
import { Suspense } from 'react';
import ListedMovies from '../listedMovies/ListedMovies';
import MovieCarousel from '../movieCarousel/MovieCarousel';
import { MovieList } from '@/types/movie';

interface MovieListSectionProps {
  loading: boolean;
  searchedFor: string;
  searchResults: MovieList | null;
  genreMovies: Record<string, MovieList>;
  trendingMovies: MovieList | null;
}

const MovieListSection = ({
  loading,
  searchedFor,
  searchResults,
  genreMovies,
  trendingMovies,
}: MovieListSectionProps) => {
  return (
    <>
      {loading ? (
        <div className="flex justify-center my-8">
          <LoadingBar />
        </div>
      ) : (
        <>
          {searchResults ? (
            <Suspense fallback={<LoadingBar />}>
              <ListedMovies
                movies={searchResults.results}
                searchResult={searchedFor}
              />
            </Suspense>
          ) : (
            <>
              <Suspense fallback={<LoadingBar />}>
                {Object.entries(genreMovies).map(([genreId, movies], id) => (
                  <MovieCarousel
                    key={id}
                    movies={movies.results}
                    genre_id={Number(genreId)}
                  />
                ))}
              </Suspense>

              {Object.keys(genreMovies).length === 0 &&
                !searchResults &&
                trendingMovies && (
                  <Suspense fallback={<LoadingBar />}>
                    <MovieCarousel
                      genre_id={-1}
                      movies={trendingMovies.results.slice(3)}
                    />
                  </Suspense>
                )}
            </>
          )}
        </>
      )}
    </>
  );
};
export default MovieListSection;
