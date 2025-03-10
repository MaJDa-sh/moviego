import { Container } from '@mui/material';

const LoadingBar = () => {
  return (
    <Container
      maxWidth={false}
      className="w-10/12! animate-pulse bg-primary-dark opacity-1 h-96 mt-12 rounded-2xl"
    ></Container>
  );
};

export default LoadingBar;
