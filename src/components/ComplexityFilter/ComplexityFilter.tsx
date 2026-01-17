import styles from "./ComplexityFilter.module.css";
import { useState } from "react";
import { complexity } from "../../constants";
import { toggleComplexity } from "../../store/slices/filter";
import { useAppDispatch } from "../../store";
import { getKey } from "../../utils/getKey";
import ButtonForFilter from "../ButtonForFilter/ButtonForFilter";

const ComplexityFilter = () => {
  const dispatch = useAppDispatch();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const handleClick = (values: number[]) => {
    dispatch(toggleComplexity(values));

    const key = getKey(values);

    setSelectedKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <div className={styles.complexityBlock}>
      <h5>Уровень сложности</h5>
      <div className={styles.itemWrapper}>
        {complexity.map((lvl, index) => {
          const key = getKey(lvl.values);
          return (
            <ButtonForFilter
              key={index}
              onClick={() => handleClick(lvl.values)}
              selected={selectedKeys.includes(key)}
            >
              {lvl.title}
            </ButtonForFilter>
          );
        })}
      </div>
    </div>
  );
};

export default ComplexityFilter;
