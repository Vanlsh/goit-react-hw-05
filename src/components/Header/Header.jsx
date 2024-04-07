import css from "./Header.module.css";
import Navigation from "../Navigation/Navigation.jsx";
import Container from "../Container/Container.jsx";

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
