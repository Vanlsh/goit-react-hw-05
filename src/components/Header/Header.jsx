import css from "./Header.module.css";
import Navigation from "../Navigation/Navigation.jsx";

const Header = () => {
  return (
    <div className={css.header}>
      <Navigation />
    </div>
  );
};

export default Header;
