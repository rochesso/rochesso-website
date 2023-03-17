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
          web="https://social-bookshelf-6158b.web.app/"
          description="Full stack application developed by me for practice purposes and to be part of my portfolio. On this project I focused more on the functionality than the design."
          stackList={["React", "Redux", "NodeJS", "MongoDB", "PassportJS"]}
        />
        <Project
          title="Project Nasa"
          img={nasa}
          code="https://github.com/rochesso/Project-NASA"
          web="https://project-nasa-c3c4f.web.app/"
          description="Final project from the course 'Complete NodeJS Developer in 2022 (GraphQL, MongoDB, + more)."
          stackList={["React", "NodeJS", "MongoDB"]}
        />
        <Project
          title="Natours"
          img={natours}
          code="https://github.com/rochesso/CSS-SASS-AdvancedA"
          web="https://rochesso-natours.web.app/"
          description="Project from the course 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!' completed by me at Udemy."
          stackList={["HTML", "CSS", "SASS"]}
        />
        <Project
          title="Trillo"
          img={trillo}
          code="https://github.com/rochesso/CSS-SASS-Advanced"
          web="https://rochesso-trillo-ced7b.web.app/"
          description="Project from the course 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!' completed by me at Udemy."
          stackList={["HTML", "CSS", "SASS"]}
        />
        <Project
          title="Nexter"
          img={nexter}
          code="https://github.com/rochesso/CSS-SASS-Advanced"
          web="https://rochesso-nexter.web.app/"
          description="Project from the course 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!' completed by me at Udemy."
          stackList={["HTML", "CSS", "SASS"]}
        />
      </div>

      {/* <h3 className={style.project_category}>Full Stack</h3>
      <a target="_blank" rel="noreferrer" className={style.project_title} href="https://social-bookshelf-6158b.web.app/">Social BookShelf</a>

      <h3 className={style.project_category}>NodeJS</h3>
      <a target="_blank" rel="noreferrer" className={style.project_title} href="https://project-nasa-c3c4f.web.app/">Project Nasa</a>

      <h3 className={style.project_category}>CSS and SASS</h3>
      <a target="_blank" rel="noreferrer" className={style.project_title} href="https://rochesso-natours.web.app/">Natours</a>
      <a target="_blank" rel="noreferrer" className={style.project_title} href="https://rochesso-trillo-ced7b.web.app/">Trillo</a>
      <a target="_blank" rel="noreferrer" className={style.project_title} href="https://rochesso-nexter.web.app/">Nexter</a>

      <h4 className={style.project_category}>For more projects, access my GitHub!</h4> */}
    </Section>
  );
};

export default Projects;
