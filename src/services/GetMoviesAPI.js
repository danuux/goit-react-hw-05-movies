import axios from "axios";


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'cab39ac6588bb4b72e7fd8c3a37c0650';

export const GetTrendingDay = async () => {
  const { data } = await axios.get('trending/movie/day', {
    params: {
      page: 1,
      api_key: API_KEY,
    },
  });
  return data.results;
};

