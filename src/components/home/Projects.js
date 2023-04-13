import Section from "../UI/Section";

import Title from "../titles/Title";
import style from "./Projects.module.css";
import Project from "../UI/Project";

import bookShelf from "../../assets/img/BookShelf.png";
import nasa from "../../assets/img/Nasa.png";
import natours from "../../assets/img/Natours.png";
import nexter from "../../assets/img/Nexter.png";
import trillo from "../../assets/img/Trillo.png";

const Projects = () => {
  return (
    <Section id="projects">
      <Title>Projects</Title>
      <div className={style.container}>
        <Project
          title="Social BookShelf"
          img={bookShelf}
          code="https://github.com/rochesso/Social-BookShelf"
          web="https://bookshelf.rochesso.com/"
          description="Full stack application developed by me for practice purposes and to be part of my portfolio. On this project I focused more on React, Redux, NodeJS, OAuth 2.0 and TypeScript."
          stackList={["React", "Redux", "NodeJS", "MongoDB", "PassportJS"]}
        />
        <Project
          title="Project Nasa"
          img={nasa}
          code="https://github.com/rochesso/Project-NASA"
          web="https://nasa.rochesso.com/"
          description="Final project from the course 'Complete NodeJS Developer in 2022 (GraphQL, MongoDB, + more)."
          stackList={["React", "NodeJS", "MongoDB"]}
        />
        <Project
          title="Natours"
          img={natours}
          code="https://github.com/rochesso/CSS-SASS-Advanced"
          web="https://natours.rochesso.com/"
          description="Project from the course 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!' completed by me at Udemy."
          stackList={["HTML", "CSS", "SASS"]}
        />
        <Project
          title="Trillo"
          img={trillo}
          code="https://github.com/rochesso/CSS-SASS-Advanced"
          web="https://trillo.rochesso.com/"
          description="Project from the course 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!' completed by me at Udemy."
          stackList={["HTML", "CSS", "SASS"]}
        />
        <Project
          title="Nexter"
          img={nexter}
          code="https://github.com/rochesso/CSS-SASS-Advanced"
          web="https://nexter.rochesso.com/"
          description="Project from the course 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!' completed by me at Udemy."
          stackList={["HTML", "CSS", "SASS"]}
        />
      </div>
    </Section>
  );
};

export default Projects;
