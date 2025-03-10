import { getMovie } from '@/actions/MoviesActions';
import MovieDescription from '@/components/molecules/movieDescription/MovieDescription';
import MovieHeader from '@/components/molecules/movieHeader/MovieHeader';
import { MovieDetails } from '@/types/movie';
import { redirect } from 'next/navigation';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { PrimaryButton } from '@/components/atoms/button/Button';
import { Container } from '@mui/material';

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const { id } = await params;
    const movieData: MovieDetails = await getMovie(id);

    if (!movieData) {
      redirect('/');
    }

    return (
      <div>
        <MovieHeader backdrop_path={movieData.backdrop_path}>
          <MovieDescription
            title={movieData.title}
            overview={movieData.overview}
            genres={movieData.genres}
            vote_average={movieData.vote_average}
            release_date={movieData.release_date}
            runtime={movieData.runtime}
            tagline={movieData.tagline}
            poster_path={movieData.poster_path}
          />
        </MovieHeader>
        <Container className="mt-4">
          <PrimaryButton href="/">
            <>
              <ArrowBackIosNewIcon />
              Home
            </>
          </PrimaryButton>
        </Container>
      </div>
    );
  } catch (error) {
    console.error('Error fetching movie:', error);
  }
}
