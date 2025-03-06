import { Container } from '@mui/material';
import MovieBanner from '@/components/molecules/movieBanner/MovieBanner';

const MovieBanners = () => {
  return (
    <Container
      maxWidth={false}
      className="grid 
                   md:grid-cols-2 
                   lg:grid-cols-3 
                   mt-112 
                   mx-0! 
                   md:mx-auto!"
    >
      <MovieBanner
        className="lg:skew-y-6 
                     md:col-span-2 
                     lg:col-span-1"
        img="https://image.tmdb.org/t/p/w1280_and_h720_face/1409Us5Om7hk3l6xUmJwNcPadwE.jpg"
      />
      <MovieBanner
        className="translate-y-0 
                     lg:translate-y-8 
                     md:skew-y-3 
                     lg:skew-y-0"
        img="https://image.tmdb.org/t/p/w1280_and_h720_face/hR6jFx8orz2RxBAY1IWjfXpkycW.jpg"
      />
      <MovieBanner
        className="md:-skew-y-6"
        img="https://image.tmdb.org/t/p/w1280_and_h720_face/oMcfxf3UeXAlAuAqNQsZWefiTr2.jpg"
      />
    </Container>
  );
};

export default MovieBanners;
