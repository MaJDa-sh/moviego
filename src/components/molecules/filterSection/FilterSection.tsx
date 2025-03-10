import {
  PrimaryButton,
  SecondaryButton,
} from '@/components/atoms/button/Button';
import SelectComponent from '@/components/atoms/select/Select';
import { useGenresStore } from '@/store/useGenresStore';
import { Container } from '@mui/material';
import { MouseEventHandler } from 'react';

interface FilterSectionProps {
  selectedGenres: string[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSort: string;
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
  handleDiscover: MouseEventHandler<HTMLAnchorElement>;
  handleFeelingLucky: MouseEventHandler<HTMLAnchorElement>;
}

const sortingData = {
  'popularity.asc': 'Popularity ▲',
  'popularity.desc': 'Popularity ▼',
  'title.asc': 'Title ▲',
  'title.desc': 'Title ▼',
  'vote_average.asc': 'Rating ▲',
  'vote_average.desc': 'Rating ▼',
  'primary_release_date.asc': 'Release Date ▲',
  'primary_release_date.desc': 'Release Date ▼',
};

const FilterSection = ({
  selectedGenres,
  setSelectedGenres,
  selectedSort,
  setSelectedSort,
  handleDiscover,
  handleFeelingLucky,
}: FilterSectionProps) => {
  const genres = useGenresStore((state) => state.genres);

  return (
    <Container className="flex flex-col">
      <div className="md:flex justify-center">
        <SelectComponent
          data={genres}
          selectedData={selectedGenres}
          setSelectedData={setSelectedGenres}
        />
        <SelectComponent
          data={sortingData}
          selectedData={selectedSort}
          setSelectedData={setSelectedSort}
          singleSelect
        />
      </div>

      <div className="flex justify-center gap-4">
        <PrimaryButton onClick={handleDiscover}>Discover Movies</PrimaryButton>
        <SecondaryButton onClick={handleFeelingLucky}>
          Feeling Lucky?
        </SecondaryButton>
      </div>
    </Container>
  );
};

export default FilterSection;
