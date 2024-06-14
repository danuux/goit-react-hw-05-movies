import axios from 'axios';

const API_KEY = '9846a25586cb6516e86c6e34d3ea8045';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;

const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return null;
  }
};

export const getTrending = async () => {
  const data = await fetchData(`trending/movie/day?api_key=${API_KEY}`);
  return data ? data.results : [];
};

export const getQuery = async (query) => {
  const data = await fetchData(`search/movie?api_key=${API_KEY}&query=${query}`);
  return data ? data.results : [];
};

export const getDetails = async (movieId) => {
  return await fetchData(`movie/${movieId}?api_key=${API_KEY}`);
};

export const getCast = async (movieId) => {
  const data = await fetchData(`movie/${movieId}/credits?api_key=${API_KEY}`);
  return data ? data.cast : [];
};

export const getReviews = async (movieId) => {
  const data = await fetchData(`movie/${movieId}/reviews?api_key=${API_KEY}`);
  return data ? data.results : [];
};

export const getMoviesByKeyword = async (keyword) => {
  const data = await fetchData(`search/movie?api_key=${API_KEY}&query=${keyword}`);
  return data ? data.results : [];
};
