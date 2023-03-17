import LinkItem from "./LinkItem";
import style from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={`${style.nav}`}>
      <ul className={style.nav__list}>
        <li className={style.nav__item}>
          <LinkItem to="home">Home</LinkItem>
        </li>
        <li className={style.nav__item}>
          <LinkItem to="presentation">Presentation</LinkItem>
        </li>
        <li className={style.nav__item}>
          <LinkItem to="skills">Skills</LinkItem>
        </li>
        <li className={style.nav__item}>
          <LinkItem to="about">About</LinkItem>
        </li>
        <li className={style.nav__item}>
          <LinkItem to="projects">Projects</LinkItem>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
