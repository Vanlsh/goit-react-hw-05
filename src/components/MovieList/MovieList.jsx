import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => (
        <li className={css.listItem} key={id}>
          <Link state={location} className={css.listLink} to={`/movies/${id}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propsType = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
export default MovieList;
