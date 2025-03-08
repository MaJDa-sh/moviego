'use client';
import {
  PrimaryButton,
  SecondaryButton,
} from '@/components/atoms/button/Button';
import MovieBanners from '@/components/organisms/movieBanners/MovieBanners';
import MovieCarousel from '@/components/organisms/movieCarousel/MovieCarousel';
import { Container } from '@mui/material';
import SearchBar from '@/components/atoms/searchBar/SearchBar';

export default function Home() {
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
        <MovieBanners />
      </Container>

      <MovieCarousel />
    </>
  );
}
