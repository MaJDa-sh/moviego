import { getMovie } from '@/actions/MoviesActions';
import MovieDescription from '@/components/molecules/movieDescription/MovieDescription';
import MovieHeader from '@/components/molecules/movieHeader/MovieHeader';
import { MovieDetails } from '@/types/movie';
import { redirect } from 'next/navigation';

export default async function MoviePage({
  params,
}: {
  params: { id: number };
}) {
  const { id } = params;

  try {
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
      </div>
    );
  } catch (error) {
    console.error('Error fetching movie:', error);
  }
}
