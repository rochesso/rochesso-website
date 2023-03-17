import Presentation from "../../components/home/Presentation";
import About from "../../components/home/About";
import Skills from "../../components/home/Skills";
import Projects from "../../components/home/Projects";
import styles from "./index.module.css";

const Home = () => {
  return (
    <main className={styles.main}>
      <Presentation />
      <Skills />
      <About />
      <Projects />
    </main>
  );
};

export default Home;
