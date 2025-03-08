'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '@/components/molecules/movieCard/MovieCard';

const MovieCarousel = () => {
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
  return (
    <div className="flex flex-col justify-center mt-16">
      <div className="w-10/12 mx-auto">
        <p className="text-3xl mb-10 w-fit underline font-extralight">
          Popular
        </p>
      </div>

      <Carousel
        containerClass="w-10/12 mx-auto"
        responsive={responsive}
        partialVisible={true}
        infinite={true}
        ssr={false}
      >
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
