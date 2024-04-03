import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propsType = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
export default MovieList;
