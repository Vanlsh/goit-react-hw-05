import css from "./Heading.module.css";

const Heading = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};

export default Heading;
