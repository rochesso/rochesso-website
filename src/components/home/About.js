import Section from '../UI/Section';

import shuriken from '../../assets/svg/shuriken-svgrepo-com.svg';
import kakashi from '../../assets/svg/icons8-kakashi-hatake.svg';
import Title from '../titles/Title';
import style from './About.module.css';

const About = () => {
  return (
    <Section id='about'>
      <Title>About</Title>
      <img className={style.about__img} src={kakashi} alt='Dog face' />
      <p className={style.about__text}>
        <img className={style.shuriken} src={shuriken} alt='Shuriken' />
        What can a “full-stack web developer” do, you ask? I can conjur a
        website from nothing into existence, fully formed. I do not use tricks,
        nor is this magic. I specialize in manipulating the very fabric of the
        web, its raw materials of HTML, CSS, JavaScript, and SVG. Linux servers
        serve me, domains are my domain, and certificates are certain.
        Open-source technologies empower this process. I am a custom WordPress
        theme and plugin development expert. I fully embraced the Gutenberg
        editor and can create custom blocks from scratch for any conceivable
        need. I have contributed in small ways to these and other open-source
        efforts and intend to give back every chance I get. My art & design
        background informs ideation to design through to implementation. In 2010
        I graduated from the Cleveland Institute of Art with a focus on digital
        arts and a mantra to always consider my audience. I will always advocate
        for the user of my interfaces; accessibility is not optional. I can
        plan, design, build, launch, and maintain a website myself—did I mention
        that I build mobile apps too? I have worked on 10+ published
        cross-platform iOS and Android apps with React Native and Titanium SDK,
        roughly half of which I built and maintain solo. A full-stack developer
        knows no bounds. And when they find one they cross it without
        hesitation, boldly going into the unknown to return richer for it.
      </p>
    </Section>
  );
};

export default About;
