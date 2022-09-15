import Circle from '../../shapes/Circle';
import style from './Header.module.css';

const Header = () => {
  let viewportWidth = window.innerWidth;
  return (
    <header className={style.header} id='home'>
      <Circle
        className={style.header__background}
        square={viewportWidth + 800}
      />
      <h1 className={style.header__title}>Arthur Rochesso</h1>
      <p className={style.header__text}>
        The jorney of a full-stack web developer
      </p>
    </header>
  );
};

export default Header;
