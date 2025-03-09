'use client';

import { ThemeProviderWrapper } from '@/components/atoms/ThemeProviderWrapper/ThemeProviderWrapper';
import './globals.scss';
import './globals.css';
import { Inter } from 'next/font/google';
import { useGenresStore } from '@/store/useGenresStore';
import { useEffect } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fetchGenres = useGenresStore((state) => state.fetchGenres);

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
