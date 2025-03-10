import { Container } from '@mui/material';
import MovieBanner from '@/components/molecules/movieBanner/MovieBanner';

const LoadingMovieBanners = () => {
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
        className="lg:skew-y-6 
                  md:col-span-2 
                  animate-pulse
                  bg-dark
                  lg:col-span-1"
        title=""
        vote_average={0}
      />
      <MovieBanner
        className="translate-y-0 
                  lg:translate-y-8 
                  md:skew-y-6 
                  animate-pulse
                  bg-dark
                  lg:skew-y-0"
        title=""
        vote_average={0}
      />
      <MovieBanner
        className="md:-skew-y-6 
                  animate-pulse
                  bg-dark"
        title=""
        vote_average={0}
      />
    </Container>
  );
};

export default LoadingMovieBanners;
