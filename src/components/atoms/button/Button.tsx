'use client';

import { Button } from '@mui/material';
import { MouseEventHandler } from 'react';

interface ButtonProps {
  children: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
}

const PrimaryButton = ({ children, onClick }: ButtonProps) => {
  return (
    <Button
      sx={{
        borderRadius: 20,
        px: 2,
        py: 1,
      }}
      variant="contained"
      color="primary"
      href="#"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

const SecondaryButton = ({ children, onClick }: ButtonProps) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      href="#"
      onClick={onClick}
      sx={{
        borderWidth: 2,
        borderRadius: 20,
        px: 2,
        py: 1,
      }}
    >
      {children}
    </Button>
  );
};

export { PrimaryButton, SecondaryButton };
