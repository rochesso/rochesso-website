import LinkItem from "../nav/LinkItem";
import Circle from "../../shapes/Circle";
import linkedinIcon from "../../../assets/svg/icons8-linkedin.svg";
import githubIcon from "../../../assets/svg/icons8-github.svg";
import arrowupIcon from "../../../assets/svg/arrowup.svg";
import style from "./Footer.module.css";

const SOCIAL = [
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/rochesso/",
    icon: linkedinIcon,
    key: Math.random().toString(),
  },
  {
    title: "Github",
    link: "https://github.com/rochesso",
    icon: githubIcon,
    key: Math.random().toString(),
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const social = SOCIAL.map((item) => (
    <a key={item.key} href={item.link} target="_blank" rel="noreferrer">
      <img src={item.icon} className={style.social__img} alt={item.title}></img>
      <p className={style.social__title}>{item.title}</p>
    </a>
  ));

  return (
    <footer className={style.footer}>
      <Circle className={style.footer__background} square="1150" />
      <section className={style.footer__content}>
        <a
          className={style.email}
          href="mailto:rochesso@outlook.com"
          title="Email me"
          rel="noreferrer"
          target="_blank"
        >
          rochesso@outlook.com
        </a>
        <div className={style.social}>{social}</div>

        <p className={style.copyright}>© {year} Arthur Rochesso</p>

        <LinkItem to="home">
          <img
            className={style["back-button"]}
            src={arrowupIcon}
            alt="Go back to the top of this page"
          ></img>
        </LinkItem>
      </section>
    </footer>
  );
};

export default Footer;
