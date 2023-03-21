import { Link } from "react-scroll";
import style from "./LinkItem.module.css";

const LinkItem = (props) => {
  return (
    <Link
      className={`${style["nav-link"]}`}
      activeClass={style["nav-link--active"]}
      spy={true}
      smooth
      offset={-51}
      to={props.to}
    >
      {props.children}
    </Link>
  );
};

export default LinkItem;
