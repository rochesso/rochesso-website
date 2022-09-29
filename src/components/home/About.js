import Section from "../UI/Section";
import kakashi from "../../assets/svg/icons8-kakashi-hatake.svg";
import Title from "../titles/Title";
import style from "./About.module.css";

const About = () => {
  return (
    <Section id="about">
      <Title>About</Title>
      <img className={style.about__img} src={kakashi} alt="Dog face" />
      <p className={style.about__text}>
        Nostrud nostrud pariatur nisi Lorem officia id cupidatat cillum velit
        cillum duis. Ullamco sint consectetur proident culpa occaecat dolore
        incididunt id est do proident. Incididunt Lorem exercitation do enim.
        Qui laboris excepteur enim nostrud dolor labore. Ad aliquip fugiat amet
        amet in aliqua deserunt qui velit consequat et incididunt cupidatat et.
        Sit nulla laboris voluptate commodo elit elit. Sit nisi sint dolor
        mollit voluptate ut do. Eiusmod non non nostrud qui excepteur
        reprehenderit qui quis elit officia officia voluptate. Incididunt
        nostrud quis Lorem cupidatat irure do deserunt consequat. Adipisicing
        pariatur occaecat excepteur labore incididunt excepteur. Aliqua
        incididunt sint consequat pariatur ex. Deserunt amet magna deserunt
        eiusmod enim excepteur velit amet sit. Excepteur qui nulla sint
        voluptate nulla fugiat in laboris Lorem cupidatat eu ut nisi commodo.
        Non cupidatat esse pariatur esse. Ullamco ullamco duis culpa cupidatat
        consectetur. Qui veniam reprehenderit consequat commodo elit cupidatat.
        Excepteur voluptate nisi anim fugiat ex eu labore dolore id irure.
      </p>
    </Section>
  );
};

export default About;
