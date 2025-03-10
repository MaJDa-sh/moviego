import axios from 'axios';
import { MovieList } from '@/types/movie';

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const axiosInstance = axios.create({
  baseURL: TMDB_BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TMDB_API_KEY}`,
  },
});

export const getTrendingMovies = async (): Promise<MovieList> => {
  const { data } = await axiosInstance.get(
    '/trending/movie/day?language=en-US',
  );
  return data;
};

export const getMoviesByGenre = async (
  genreId: string,
  sortBy: string = 'popularity.desc',
): Promise<MovieList> => {
  const { data } = await axiosInstance.get('/discover/movie', {
    params: {
      language: 'en-US',
      page: 1,
      sort_by: sortBy,
      with_genres: genreId,
    },
  });
  return data;
};

export const searchMovies = async (query: string): Promise<MovieList> => {
  const { data } = await axiosInstance.get('/search/movie', {
    params: {
      query,
      language: 'en-US',
      page: 1,
    },
  });
  return data;
};
