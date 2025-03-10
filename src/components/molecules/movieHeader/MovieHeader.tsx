import { Container } from '@mui/material';
import { JSX } from 'react';

interface MovieHeaderParams {
  backdrop_path: string;
  children: JSX.Element;
}

const MovieHeader = ({ backdrop_path, children }: MovieHeaderParams) => {
  return (
    <Container
      maxWidth={false}
      className="min-h-[50svh] bg-black/75 bg-blend-darken flex items-end p-4 justify-between"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1920/${backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </Container>
  );
};

export default MovieHeader;
