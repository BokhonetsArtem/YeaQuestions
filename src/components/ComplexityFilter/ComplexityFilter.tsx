import styles from "./ComplexityFilter.module.css";
import { complexity } from "../../constants";
import { toggleComplexity } from "../../store/slices/filter";
import { useAppDispatch } from "../../store";

const ComplexityFilter = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.complexityBlock}>
      <h5>Уровень сложности</h5>
      <div className={styles.itemWrapper}>
        {complexity.map((lvl, index) => {
          return (
            <button
              onClick={() => dispatch(toggleComplexity(lvl))}
              className={styles.button}
              key={index}
            >
              {lvl}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ComplexityFilter;
