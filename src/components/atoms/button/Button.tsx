'use client';

import { Button } from '@mui/material';
import { JSX, MouseEventHandler } from 'react';

interface ButtonProps {
  children: JSX.Element | string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  href?: string;
}

const PrimaryButton = ({ children, onClick, href }: ButtonProps) => {
  return (
    <Button
      sx={{
        borderRadius: 20,
        px: 2,
        py: 1,
      }}
      variant="contained"
      color="primary"
      href={href || '#'}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

const SecondaryButton = ({ children, onClick, href }: ButtonProps) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      href={href || '#'}
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
