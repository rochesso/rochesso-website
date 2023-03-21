import style from "./SkillsItem.module.css";

const SkillsItem = (props) => {
  return (
    <li className={style.skills__item}>
      <h3 className={style.skills__title}>{props.title}</h3>
      <img src={props.icon} className={style.skills__img} alt={props.alt}></img>
    </li>
  );
};

export default SkillsItem;
