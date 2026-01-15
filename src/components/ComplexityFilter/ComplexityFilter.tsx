import styles from "./ComplexityFilter.module.css";
import { complexity } from "../../constants";
import { toggleComplexity } from "../../store/slices/filter";
import { useAppDispatch } from "../../store";
import ButtonForFilter from "../ButtonForFilter/ButtonForFilter";

const ComplexityFilter = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.complexityBlock}>
      <h5>Уровень сложности</h5>
      <div className={styles.itemWrapper}>
        {complexity.map((lvls, index) => {
          return (
            <ButtonForFilter
              onClick={() => dispatch(toggleComplexity(lvls))}
              key={index}
            >{`${lvls[0]}-${lvls[lvls.length - 1]}`}</ButtonForFilter>
          );
        })}
      </div>
    </div>
  );
};

export default ComplexityFilter;
