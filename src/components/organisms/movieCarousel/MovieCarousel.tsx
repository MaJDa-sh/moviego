import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '@/components/molecules/movieCard/MovieCard';
import { Movie } from '@/types/movie';
import { useGenresStore } from '@/store/useGenresStore';
import { useRouter } from 'next/navigation';

interface MovieCarouselProps {
  movies: Movie[];
  genre_id: number;
}

const responsive = {
  xxl: {
    breakpoint: { max: 4000, min: 1536 },
    partialVisibilityGutter: 30,
    items: 4,
  },
  xl: {
    breakpoint: { max: 1536, min: 1280 },
    partialVisibilityGutter: 40,
    items: 3,
  },
  lg: {
    breakpoint: { max: 1280, min: 1024 },
    partialVisibilityGutter: 40,
    items: 2,
  },
  md: {
    breakpoint: { max: 1024, min: 768 },
    partialVisibilityGutter: 50,
    items: 2,
  },
  sm: {
    breakpoint: { max: 768, min: 0 },
    partialVisibilityGutter: 10,
    items: 1,
  },
};

const MovieCarousel = ({ movies, genre_id }: MovieCarouselProps) => {
  const genres = useGenresStore((state) => state.genres);
  const router = useRouter();
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => setStartX(e.clientX);
  const handleMouseUp = (e: React.MouseEvent, movieId: number) => {
    if (Math.abs(startX - e.clientX) < 10) {
      router.push(`/movie/${movieId}`);
    }
  };

  return (
    <div className="flex flex-col justify-center mt-16">
      <div className="w-10/12 mx-auto max-w-512">
        <p className="text-3xl mb-10 w-fit underline font-extralight">
          {genres[genre_id] || 'Popular'}
        </p>
      </div>

      <Carousel
        containerClass="w-10/12 mx-auto max-w-512"
        responsive={responsive}
        partialVisible
        infinite
        ssr={false}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => handleMouseUp(e, movie.id)}
          >
            <MovieCard
              title={movie.title}
              overview={movie.overview}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              genre_ids={movie.genre_ids.slice(0, 2)}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
