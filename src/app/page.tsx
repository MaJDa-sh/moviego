'use client';

import {
  PrimaryButton,
  SecondaryButton,
} from '@/components/atoms/button/Button';
import dynamic from 'next/dynamic';
import { Container, CircularProgress } from '@mui/material';
import SearchBar from '@/components/atoms/searchBar/SearchBar';
import { useState, useEffect, Suspense } from 'react';
import * as actions from '../actions/MoviesActions';
import { MovieList } from '@/types/movie';

const MovieBanners = dynamic(
  () => import('@/components/organisms/movieBanners/MovieBanners'),
  {
    ssr: false,
    loading: () => <CircularProgress />,
  },
);

const MovieCarousel = dynamic(
  () => import('@/components/organisms/movieCarousel/MovieCarousel'),
  {
    ssr: false,
    loading: () => <CircularProgress />,
  },
);

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState<MovieList | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    actions.GetPopularMovies((res: MovieList) => {
      setTrendingMovies(res);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Container
        maxWidth={false}
        className="grid min-h-svh content-between py-20"
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
          <div className="flex justify-center mt-8 gap-4">
            <PrimaryButton>Browse Movies</PrimaryButton>
            <SecondaryButton>Feeling Lucky?</SecondaryButton>
          </div>
        </div>
        <SearchBar />

        {loading ? (
          <div className="flex justify-center my-8">
            <CircularProgress />
          </div>
        ) : (
          <Suspense fallback={<CircularProgress />}>
            {trendingMovies && (
              <MovieBanners movies={trendingMovies.results.slice(0, 3)} />
            )}
          </Suspense>
        )}
      </Container>
      {loading ? (
        <div className="flex justify-center my-8">
          <CircularProgress />
        </div>
      ) : (
        <Suspense fallback={<CircularProgress />}>
          {trendingMovies && (
            <MovieCarousel movies={trendingMovies.results.slice(3, -1)} />
          )}
        </Suspense>
      )}
    </>
  );
}
