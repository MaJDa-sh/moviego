'use client';

import { Movie } from '@/types/movie';
import { Container } from '@mui/material';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

interface ListedMoviesProps {
  movies: Movie[];
  searchResult: string;
}

const MovieCard = dynamic(
  () => import('@/components/molecules/movieCard/MovieCard'),
  {
    ssr: false,
  },
);

const ListedMovies = ({ movies, searchResult }: ListedMoviesProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center mt-16">
      <div className="w-10/12 mx-auto max-w-512">
        <p className="text-3xl mb-10 w-fit underline font-extralight">
          Results for: {searchResult}
        </p>
      </div>

      <Container
        maxWidth={false}
        className="flex flex-wrap gap-5 w-11/12! justify-center"
      >
        {movies.map((movie, key) => (
          <MovieCard
            onClick={() => {
              router.push(`/movie/${movie.id}`);
            }}
            key={key}
            title={movie.title}
            overview={movie.overview}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            genre_ids={movie.genre_ids.slice(0, 2)}
          />
        ))}
      </Container>
    </div>
  );
};

export default ListedMovies;
