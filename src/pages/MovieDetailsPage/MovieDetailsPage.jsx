import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import clsx from "clsx";
import { getMovie } from "../../api/movies";

import { IoArrowBackSharp } from "react-icons/io5";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import Loader from "../../components/Loader/Loader";
import Heading from "../../components/Heading/Heading";
import css from "./MovieDetailsPage.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    const fetchMovie = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const { data } = await getMovie(movieId);
        setMovie(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <Section>
      <Container>
        <Link className={css.backLink} to={backLinkRef.current}>
          <IoArrowBackSharp />
          Back
        </Link>
        {error && <Heading title={error} />}
        {isLoading && <Loader />}
        {movie && <MovieDetails movie={movie} />}
        {!error && !isLoading && (
          <>
            <ul className={css.list}>
              <li className={css.listItem}>
                <NavLink className={buildLinkClass} to="cast">
                  Cast
                </NavLink>
              </li>
              <li className={css.listItem}>
                <NavLink className={buildLinkClass} to="reviews">
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </>
        )}
      </Container>
    </Section>
  );
};

export default MovieDetailsPage;
