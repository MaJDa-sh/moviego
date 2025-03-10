'use client';

import StarRating from '@/components/atoms/starRating/StarRating';
import { Genre } from '@/types/movie';
import { Container } from '@mui/material';

interface MovieDescriptionParams {
  title: string;
  overview: string;
  vote_average: number;
  genres: Genre[];
  release_date: string;
  runtime: number;
  tagline: string;
  poster_path: string;
}

const MovieDescription = ({
  title,
  overview,
  vote_average,
  genres,
  release_date,
  runtime,
  tagline,
  poster_path,
}: MovieDescriptionParams) => {
  return (
    <Container maxWidth="md" className="flex md:gap-4 items-end">
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="md:h-60 md:w-120 drop-shadow-[0_5px_10px_rgba(255,255,255,0.2)]"
      />
      <div className="flex flex-col gap-2 md:gap-4 h-fit">
        <p className="text-3xl md:text-6xl font-black">{title}</p>
        <p className="font-extralight">
          <span className="block md:flex pb-2">{release_date}</span>{' '}
          <span className="flex flex-wrap">
            {genres.map((genre, i) => (
              <span
                className="py-1 px-2 rounded-xl border border-primary mx-1"
                key={i}
              >
                {genre.name}
              </span>
            ))}{' '}
          </span>
          <span className="block md:flex pt-2">
            {Math.floor(runtime / 60)}h {runtime % 60}m
          </span>
        </p>
        <StarRating voteAvarage={vote_average} />
        <div className="border-l-2 ps-4 border-primary">
          <p className="font-black text-gray-400 mb-4">{tagline}</p>
          <p className="text-balance font-light">{overview}</p>
        </div>
      </div>
    </Container>
  );
};

export default MovieDescription;
