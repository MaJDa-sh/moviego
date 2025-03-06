'use client';

import { Button } from '@mui/material';

interface ButtonProps {
  children: string;
}

const PrimaryButton = ({ children }: ButtonProps) => {
  return (
    <Button
      sx={{
        borderRadius: 20,
        px: 4,
        py: 1,
      }}
      variant="contained"
      color="primary"
    >
      {children}
    </Button>
  );
};

const SecondaryButton = ({ children }: ButtonProps) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      sx={{
        borderWidth: 2,
        borderRadius: 20,
        px: 4,
        py: 1,
      }}
    >
      {children}
    </Button>
  );
};

export { PrimaryButton, SecondaryButton };
