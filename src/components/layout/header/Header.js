import Circle from '../../shapes/Circle';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header} id='home'>
      <Circle className={style.header__background} square='1200' />
      <h1 className={style.header__title}>Arthur Rochesso</h1>
      <p className={style.header__text}>
        The jorney of a full-stack web developer
      </p>
    </header>
  );
};

export default Header;
