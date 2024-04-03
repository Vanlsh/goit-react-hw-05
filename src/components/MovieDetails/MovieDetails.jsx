import PropTypes from "prop-types";

const MovieDetails = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div>
        <h2>{movie.title}</h2>
        <p>User Score: {movie.vote_count}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <ul>
          {movie.genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
MovieDetails.propTypes = {
  movie: PropTypes.object,
};

export default MovieDetails;
