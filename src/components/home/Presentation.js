import Section from "../UI/Section";
import faceImage from "../../assets/img/face.png";
import satellite from "../../assets/img/moon.png";
import style from "./Presentation.module.css";

const Presentation = () => {
  return (
    <Section id="presentation">
      <img
        className={style.presentation__img}
        src={faceImage}
        alt="Arthur Rochesso face"
      />
      <div className={style.presentation__system}>
        <div className={`${style["presentation__satellite--orbit"]}`}>
          <img
            className={style.presentation__satellite}
            src={satellite}
            alt="Moon"
          />
        </div>
      </div>
      <p className={style.presentation__text}>
        As a passionate and dedicated individual with a strong interest in web
        development, I possess a solid foundation of technical skills and a
        desire to learn and grow in the field. Although I have no commercial
        experience in web development, I have pursued various personal projects
        and online courses to enhance my knowledge and skills in web
        development, including HTML, CSS, JavaScript, TypeScript, React, NodeJS,
        Python and C#.
      </p>
    </Section>
  );
};

export default Presentation;
