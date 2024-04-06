import { useEffect, useState } from "react";
import { getMovies } from "../../api/movies";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [inputQuery, setInputQuery] = useState(query ?? "");

  useEffect(() => {
    console.log(query);
    if (!query) return;

    const fetchMovies = async () => {
      try {
        setError(null);
        setIsLoading(true);
        const { data } = await getMovies(query);
        setMovies(data.results);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuery = inputQuery.trim();
    if (!newQuery) {
      console.log("can not be empty");
      return;
    }
    setSearchParams({ query: newQuery });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          type="text"
          name="query"
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movies && <MovieList movies={movies} />}
    </main>
  );
};

export default MoviesPage;
