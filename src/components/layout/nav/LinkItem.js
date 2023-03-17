import { Link } from "react-scroll";
import style from "./LinkItem.module.css";

const LinkItem = (props) => {
  const scrollDown = async () => {
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await sleep(1);
    window.scrollBy(0, 5);
  };

  return (
    <Link
      onClick={scrollDown}
      className={`${style["nav-link"]}`}
      activeClass={style["nav-link--active"]}
      spy={true}
      offset={-51}
      to={props.to}
    >
      {props.children}
    </Link>
  );
};

export default LinkItem;
