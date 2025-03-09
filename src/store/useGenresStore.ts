import { create } from 'zustand';
import axios from 'axios';
import { Genre } from '@/types/movie';

interface GenresState {
  genres: Record<number, string>;
  fetchGenres: () => Promise<void>;
}

export const useGenresStore = create<GenresState>((set, get) => ({
  genres: {},

  fetchGenres: async () => {
    if (Object.keys(get().genres).length > 0) return;

    try {
      const res = await axios.get(
        'https://api.themoviedb.org/3/genre/movie/list?language=en',
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
          },
        },
      );

      const genresArray: Genre[] = res.data.genres;
      const genresMap = genresArray.reduce((acc, genre) => {
        acc[genre.id] = genre.name;
        return acc;
      }, {} as Record<number, string>);

      set({ genres: genresMap });
    } catch (error) {
      console.error('Failed to fetch genres:', error);
    }
  },
}));
