import { Container } from '@mui/material';

export default function Loading() {
  return (
    <Container
      maxWidth={false}
      className="min-h-[50svh] bg-primary-dark animate-pulse opacity-1"
    />
  );
}
