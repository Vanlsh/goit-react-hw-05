import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/movies";

import css from "./MovieReviews.module.css";
import Heading from "../Heading/Heading.jsx";
import Loader from "../Loader/Loader.jsx";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      setIsLoading(true);
      try {
        const {
          data: { results },
        } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Heading title={error} />}
      {reviews && !reviews.length && <Heading title="No reviews" />}
      <ul className={css.list}>
        {reviews &&
          reviews.map(({ author, content }, index) => (
            <li className={css.item} key={index}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieReviews;
