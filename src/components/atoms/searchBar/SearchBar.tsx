import { Button, Container, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { MouseEventHandler } from 'react';

interface SearchProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: MouseEventHandler<HTMLAnchorElement>;
}

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
}: SearchProps) => {
  return (
    <Container className="mx-auto justify-self-center flex justify-center mt-12 mb-2">
      <TextField
        id="filled-search"
        label="Search Your movie"
        type="search"
        variant="filled"
        color="primary"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          style: { color: 'white', maxWidth: '25rem', width: '50vw' },
          disableUnderline: false,
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
        sx={{
          '& .MuiFilledInput-root': {
            '&:before': {
              borderBottomColor: 'white !important',
            },
            '&:hover:before': {
              borderBottomColor: 'white !important',
            },
            '&:after': {
              borderBottomColor: 'primary.main',
            },
          },
        }}
      />
      <Button
        href="#"
        onClick={handleSearch}
        variant="contained"
        color="primary"
        sx={{ borderRadius: 0 }}
      >
        <SearchIcon />
      </Button>
    </Container>
  );
};

export default SearchBar;
