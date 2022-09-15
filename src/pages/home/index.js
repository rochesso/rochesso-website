import Presentation from '../../components/home/Presentation';
import About from '../../components/home/About';
import Skills from '../../components/home/Skills';
import style from './index.module.css';

const Home = (props) => {
  return (
    <main className={style.main}>
      <Presentation />
      <Skills />
      <About />
    </main>
  );
};

export default Home;
