import axios from 'axios';

export const GetPopularMovies = (callback: Function) => {
  const config = {
    url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    },
  };

  axios.request(config).then((res) => callback(res.data));
};
