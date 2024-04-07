import { useEffect, useState } from "react";
import { getMovies } from "../../api/movies";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import Form from "../../components/Form/Form";
import Loader from "../../components/Loader/Loader";
import Heading from "../../components/Heading/Heading";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      setIsLoading(true);
      setMovies(null);
      try {
        setError(null);
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

  const handleSearch = (query) => {
    setSearchParams({ query });
  };

  return (
    <Section>
      <Container>
        <Form handleSearch={handleSearch} value={query} />
        {isLoading && <Loader />}
        {movies && !movies.length && <Heading title="No Movies" />}
        {error && <Heading title={error} />}
        {movies && <MovieList movies={movies} />}
      </Container>
    </Section>
  );
};

export default MoviesPage;
