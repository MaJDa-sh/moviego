import { Button, Container, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Container className="mx-auto justify-self-center flex justify-center my-12">
      <TextField
        id="filled-search"
        label="Search Your movie"
        type="search"
        variant="filled"
        color="primary"
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
      <Button variant="contained" color="primary" sx={{ borderRadius: 0 }}>
        <SearchIcon />
      </Button>
    </Container>
  );
};

export default SearchBar;
