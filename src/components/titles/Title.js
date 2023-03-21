import style from "./Title.module.css";

const Title = (props) => {
  return (
    <h2 id={props.id} className={style.title}>
      {props.children}
    </h2>
  );
};

export default Title;
