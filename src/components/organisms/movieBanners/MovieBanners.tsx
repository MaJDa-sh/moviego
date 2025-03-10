'use client';

import { Container } from '@mui/material';
import MovieBanner from '@/components/molecules/movieBanner/MovieBanner';
import { Movie } from '@/types/movie';
import { useRouter } from 'next/navigation';

interface MovieBannersProps {
  movies: Movie[];
}

const MovieBanners = ({ movies }: MovieBannersProps) => {
  const router = useRouter();
  return (
    <Container
      maxWidth={false}
      className="grid 
                md:grid-cols-2 
                lg:grid-cols-3 
                mx-0! 
                px-0!
                max-w-512
                md:mx-auto!"
    >
      <MovieBanner
        onClick={() => {
          router.push(`/movie/${movies[0].id}`);
        }}
        className="lg:skew-y-6 
                  md:col-span-2 
                  lg:col-span-1"
        img={`https://image.tmdb.org/t/p/w1280_and_h720_face/${movies[0].backdrop_path}`}
        title={movies[0].title}
        vote_average={movies[0].vote_average}
      />
      <MovieBanner
        onClick={() => {
          router.push(`/movie/${movies[1].id}`);
        }}
        className="translate-y-0 
                  lg:translate-y-8 
                  md:skew-y-6 
                  lg:skew-y-0"
        img={`https://image.tmdb.org/t/p/w1280_and_h720_face/${movies[1].backdrop_path}`}
        title={movies[1].title}
        vote_average={movies[1].vote_average}
      />
      <MovieBanner
        onClick={() => {
          router.push(`/movie/${movies[2].id}`);
        }}
        className="md:-skew-y-6"
        img={`https://image.tmdb.org/t/p/w1280_and_h720_face/${movies[2].backdrop_path}`}
        title={movies[2].title}
        vote_average={movies[2].vote_average}
      />
    </Container>
  );
};

export default MovieBanners;
