import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api/movies.js";

import MovieList from "../../components/MovieList/MovieList.jsx";
import Section from "../../components/Section/Section.jsx";
import Container from "../../components/Container/Container.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import Heading from "../../components/Heading/Heading.jsx";
const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const { data } = await getTrendingMovies();
        setMovies(data.results);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Section>
      <Container>
        <h1>Trending today </h1>
        {isLoading && <Loader />}
        {error && <Heading title={error} />}
        {movies && <MovieList movies={movies} />}
      </Container>
    </Section>
  );
};

export default HomePage;
