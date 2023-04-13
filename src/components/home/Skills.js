import Section from "../UI/Section";
import Title from "../titles/Title";
import SkillsItem from "./SkillsItem";
import style from "./Skills.module.css";

import htmlIcon from "../../assets/svg/icons8-html-5.svg";
import cssIcon from "../../assets/svg/icons8-css3.svg";
import javascriptIcon from "../../assets/svg/icons8-javascript.svg";
import reactIcon from "../../assets/svg/icons8-react-native.svg";
import nodejsIcon from "../../assets/svg/icons8-nodejs.svg";
import pythonIcon from "../../assets/svg/icons8-python.svg";
import csharpIcon from "../../assets/svg/icons8-c-sharp-logo.svg";
import typeScriptIcon from "../../assets/svg/icons8-typescript.svg";
import rocket from "../../assets/svg/rocket-launch.svg";

const SKILLS = [
  {
    title: "HTML",
    alt: "HTML icon",
    icon: htmlIcon,
    key: Math.random().toString(),
  },

  {
    title: "CSS",
    alt: "CSS icon",
    icon: cssIcon,
    key: Math.random().toString(),
  },

  {
    title: "JavaScript",
    alt: "JavaScript icon",
    icon: javascriptIcon,
    key: Math.random().toString(),
  },

  {
    title: "TypeScript",
    alt: "TypeScript icon",
    icon: typeScriptIcon,
    key: Math.random().toString(),
  },

  {
    title: "C#",
    alt: "C Sharp icon",
    icon: csharpIcon,
    key: Math.random().toString(),
  },

  {
    title: "Python",
    alt: "Python icon",
    icon: pythonIcon,
    key: Math.random().toString(),
  },

  {
    title: "ReactJS",
    alt: "ReactJS icon",
    icon: reactIcon,
    key: Math.random().toString(),
  },

  {
    title: "NodeJS",
    alt: "NodeJS icon",
    icon: nodejsIcon,
    key: Math.random().toString(),
  },

  {
    title: "And more!",
    alt: "Rocket icon",
    icon: rocket,
    key: Math.random().toString(),
  },
];

const Skills = () => {
  const skillList = SKILLS.map((skill) => (
    <SkillsItem
      key={skill.key}
      title={skill.title}
      alt={skill.alt}
      icon={skill.icon}
    />
  ));
  return (
    <Section id="skills">
      <Title>Skills</Title>
      <ul className={style.skills__list}>{skillList}</ul>
      {/* <img src={rocket} className={style.rocket} alt="And more skills"></img>
      <h3 className={style.rocket__text}>And more!</h3> */}
    </Section>
  );
};

export default Skills;
