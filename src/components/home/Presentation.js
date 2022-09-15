import Section from '../UI/Section';

import bolt from '../../assets/svg/bolt-svgrepo-com.svg';
import faceImage from '../../assets/svg/icons8-thor.svg';
import satellite from '../../assets/img/icons8-thor-hammer-96.png';
import style from './Presentation.module.css';

const Presentation = () => {
  return (
    <Section id='presentation'>
      <img
        className={style.presentation__img}
        src={faceImage}
        alt='Arthur Rochesso face'
      />
      <div className={style.presentation__system}>
        <div className={`${style['presentation__satellite--orbit']}`}>
          <img
            className={style.presentation__satellite}
            src={satellite}
            alt='Moon'
          />
        </div>
      </div>
      <p className={style.presentation__text}>
        <img className={style.bolt} src={bolt} alt='Yellow bolt' />
        For over a decade, I have studied and inscribed the sacred runes and
        performed the arcane rituals that breathe life into the realm of the
        internet. The web can sometimes be indistinguishable from magic, but I
        have the knowledge and patience required to make just about anything.
      </p>
    </Section>
  );
};

export default Presentation;
