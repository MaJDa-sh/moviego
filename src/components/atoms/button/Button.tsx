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
        px: { xs: 1, sm: 2 },
        py: { xs: 0.5, sm: 1 },
        fontSize: { xs: '0.75rem', sm: '0.875rem' },
        minWidth: { xs: '100px', sm: '130px', md: '160px' },
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
        px: { xs: 1, sm: 2 },
        py: { xs: 0.5, sm: 1 },
        fontSize: { xs: '0.75rem', sm: '0.875rem' },
        minWidth: { xs: '100px', sm: '130px', md: '160px' },
      }}
    >
      {children}
    </Button>
  );
};

export { PrimaryButton, SecondaryButton };
