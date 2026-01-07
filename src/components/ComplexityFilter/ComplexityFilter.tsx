import styles from "./ComplexityFilter.module.css";
import { complexity } from "../../constants";

const ComplexityFilter = () => {
  return (
    <div className={styles.complexityBlock}>
      <h5>Уровень сложности</h5>
      <div className={styles.itemWrapper}>
        {complexity.map((lvl, index) => {
          return (
            <button className={styles.button} key={index}>
              {lvl}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ComplexityFilter;
