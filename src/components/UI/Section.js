import { Fragment } from "react";
import styles from "./Section.module.css";

const Section = (props) => {
  return (
    <Fragment>
      <section id={props.id} className={styles.section}>
        {props.children}
      </section>

      {/* Prevents 2 LinkItems to be active at same time  */}
      <span className={styles.separator}></span>
    </Fragment>
  );
};

export default Section;
