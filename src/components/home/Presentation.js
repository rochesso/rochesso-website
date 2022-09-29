import Section from "../UI/Section";
import faceImage from "../../assets/svg/icons8-thor.svg";
import satellite from "../../assets/img/icons8-thor-hammer-96.png";
import style from "./Presentation.module.css";

const Presentation = () => {
  return (
    <Section id="presentation">
      <img
        className={style.presentation__img}
        src={faceImage}
        alt="Arthur Rochesso face"
      />
      <div className={style.presentation__system}>
        <div className={`${style["presentation__satellite--orbit"]}`}>
          <img
            className={style.presentation__satellite}
            src={satellite}
            alt="Moon"
          />
        </div>
      </div>
      <p className={style.presentation__text}>
        Nulla incididunt ex aliquip dolor nostrud do consequat cupidatat magna
        officia adipisicing commodo cupidatat. Ipsum dolor cupidatat cupidatat
        cillum mollit. Cupidatat proident ex tempor nisi est veniam sit et magna
        duis proident. Non occaecat qui veniam et. Deserunt sunt excepteur
        cupidatat magna nostrud ex. Nulla commodo velit adipisicing amet id do
        non ex ea proident id non sint in. Voluptate sint Lorem sit qui commodo
        fugiat et. Dolor cillum aute sunt mollit qui esse elit nostrud.
        Voluptate mollit esse esse enim aute Lorem veniam cupidatat ea.
      </p>
    </Section>
  );
};

export default Presentation;
