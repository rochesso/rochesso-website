import style from "./Project.module.css";

const Project = (props) => {
  const stackList = props.stackList.map((item) => {
    return (
      <li key={style.stack__item + item} className={style.stack__item}>
        {item}
      </li>
    );
  });
  return (
    <article className={style.container}>
      <img className={style.image} src={props.img} alt={props.title} />
      <h3 className={style.title}>{props.title}</h3>
      <p className={style.description}>{props.description}</p>
      <div className={style.stack}>
        <h4 className={style.stack__title}>Stack</h4>
        <ul className={style.stack__list}>{stackList}</ul>
      </div>
      <div className={style.links}>
        <ul className={style.links__list}>
          <li className={style.links__item}>
            <a target="_blank" rel="noreferrer" href={props.code}>
              Code
            </a>
          </li>
          <li className={style.links__item}>
            <a target="_blank" rel="noreferrer" href={props.web}>
              Website
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Project;
