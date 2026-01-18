import styles from "./ComplexityFilter.module.css";
import { useState } from "react";
import { toggleComplexity } from "../../model/filterSlice";
import { getKey } from "@/6_shared/utils/getKey";
import { complexity } from "@/6_shared/constants";
import { ButtonForFilter } from "@/6_shared/UI";
import { useAppDispatch } from "@/6_shared/storeHooks";

const ComplexityFilter = () => {
  const dispatch = useAppDispatch();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const handleClick = (values: number[]) => {
    dispatch(toggleComplexity(values));

    const key = getKey(values);

    setSelectedKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
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
