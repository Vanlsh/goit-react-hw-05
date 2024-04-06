import { Suspense, useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getMovie } from "../../api/movies";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setError(null);
        setIsLoading(true);
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
  console.log(movieId);
  return (
    <main>
      {error && <div>Error</div>}
      {isLoading && <div>Loading...</div>}
      {movie && <MovieDetails movie={movie} />}
      {!error && !isLoading && (
        <>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
};

export default MovieDetailsPage;
