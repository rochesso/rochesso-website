import Section from "../UI/Section";
import Title from "../titles/Title";

import profilePicture from "../../assets/img/face-square.jpg";

import style from "./About.module.css";

const About = () => {
  return (
    <Section id="about">
      <Title>About</Title>
      <img className={style.about__img} src={profilePicture} alt="Profile" />
      <p className={style.about__text}>
        Mathematics and technology have always been my passion. I always enjoyed
        exploring different Linux distributions, building my own pc, creating
        excel spreadsheets using VBA and solving maths problems.
      </p>
      <p className={style.about__text}>
        I have completed my degree in Mathematics in 2018, worked as a maths
        teacher and it was amazing, but it was in 2020 after moving to England
        that someone introduced me to the web development world, and I found it
        fascinating how it's possible to create basically anything coding.
      </p>
      <p className={style.about__text}>
        Since then, learning about web development has become my hobby, and when
        I am coding, time just flies. Instead of watching a TV show or playing a
        game, coding is my new way to have fun, and why not work with something
        you love to do? That's how I decided to become a full stack web
        developer.
      </p>
    </Section>
  );
};

export default About;
