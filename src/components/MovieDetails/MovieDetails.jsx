import PropTypes from "prop-types";
import css from "./MovieDetails.module.css";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
const MovieDetails = ({ movie }) => {
  return (
    <div className={css.card}>
      <div className={css.imgWrapper}>
        <img
          className={css.img}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defaultImg
          }
          alt={movie.title}
          width={250}
        />
      </div>
      <div className={css.contentWrapper}>
        <h2 className={css.title}>{movie.title}</h2>
        <p className={css.score}>User Score: {movie.vote_count}</p>
        <h3 className={css.subtitle}>Overview</h3>
        <p className={css.overview}>{movie.overview}</p>
        <h3 className={css.subtitle}>Genres</h3>
        <ul className={css.genres}>
          {movie.genres.map(({ id, name }) => (
            <li className={css.genre} key={id}>
              {name}
            </li>
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
