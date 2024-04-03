import axios from "../axios.js";

export const getTrendingMovies = async () => {
  const data = await axios.get("trending/movie/day");
  return data;
};

export const getMovies = async (query = "") => {
  const data = await axios.get("search/movie", {
    params: { query, include_adult: false },
  });
  return data;
};

export const getMovie = async (id) => {
  const data = await axios.get(`movie/${id}`);
  return data;
};

export const getMovieCredits = async (id) => {
  const data = await axios.get(`movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async (id, page = 1) => {
  const data = await axios.get(`movie/${id}/reviews`, { params: { page } });
  return data;
};
