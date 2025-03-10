import SearchBar from '@/components/atoms/searchBar/SearchBar';
import FilterSection from '@/components/molecules/filterSection/FilterSection';
import WelcomeText from '@/components/molecules/welcomeText/WelcomeText';
import { Container } from '@mui/material';
import { MouseEventHandler, Suspense } from 'react';
import LoadingMovieBanners from '../movieBanners/LoadingMovieBanners';
import MovieBanners from '../movieBanners/MovieBanners';
import { Movie } from '@/types/movie';

interface HeroSectionProps {
  selectedGenres: string[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSort: string;
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
  handleDiscover: MouseEventHandler<HTMLAnchorElement>;
  handleFeelingLucky: MouseEventHandler<HTMLAnchorElement>;
  handleSearch: MouseEventHandler<HTMLAnchorElement>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  trendingMovies: Movie[] | undefined;
  loading: boolean;
}

const HeroSection = ({
  selectedGenres,
  setSelectedGenres,
  selectedSort,
  setSelectedSort,
  handleDiscover,
  handleFeelingLucky,
  searchQuery,
  setSearchQuery,
  handleSearch,
  trendingMovies,
  loading,
}: HeroSectionProps) => {
  return (
    <Container
      maxWidth={false}
      className="grid min-h-svh content-between py-10"
    >
      <WelcomeText />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <FilterSection
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        handleDiscover={handleDiscover}
        handleFeelingLucky={handleFeelingLucky}
      />
      {loading ? (
        <div className="flex justify-center my-8">
          <LoadingMovieBanners />
        </div>
      ) : (
        <Suspense fallback={<LoadingMovieBanners />}>
          {trendingMovies && <MovieBanners movies={trendingMovies} />}
        </Suspense>
      )}
    </Container>
  );
};

export default HeroSection;
