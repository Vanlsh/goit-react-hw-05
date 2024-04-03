import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api/movies.js";

import MovieList from "../../components/MovieList/MovieList.jsx";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const { data } = await getTrendingMovies();
        setMovies(data.results);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today </h1>
      {isLoading && <div>Loading...</div>}
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
