import { useState } from "react";
import styles from "./SpecializationFilter.module.css";

import { toggleSpecialization } from "../../model/filterSlice";
import ButtonForFilter from "@/6_shared/UI/ButtonForFilter/ButtonForFilter";
import {
  useGetSpecializationQuery,
  type ISpecialization,
} from "@/5_entities/specialization";
import { useAppDispatch, useAppSelector } from "@/6_shared/storeHooks";

const SpecializationFilter = () => {
  const [allItems, setAllItems] = useState(false);
  const chosenSpecializationId = useAppSelector(
    (state) => state.filterReducer.specializationId,
  );

  const dispatch = useAppDispatch();
  const { data: items = [] } = useGetSpecializationQuery();

  const previewItems = items.slice(0, 5);
  const restItems = items.slice(5);

  const handleClick = (item: ISpecialization) => {
    dispatch(toggleSpecialization(item));
  };

  return (
    <div className={styles.specializationBlock}>
      <h5>Специализация</h5>
      <div className={styles.itemWrapper}>
        {previewItems.map((item) => {
          return (
            <ButtonForFilter
              onClick={() => handleClick(item)}
              key={item.id}
              selected={chosenSpecializationId === item.id}
            >
              {item.title}
            </ButtonForFilter>
          );
        })}
      </div>

      <div className={styles.itemWrapper}>
        {allItems &&
          restItems.map((item) => {
            return (
              <ButtonForFilter
                onClick={() => handleClick(item)}
                key={item.id}
                selected={chosenSpecializationId === item.id}
              >
                {item.title}
              </ButtonForFilter>
            );
          })}
      </div>

      <button
        onClick={() => setAllItems((prevValue) => !prevValue)}
        className={styles.showAll}
      >
        {!allItems ? "Посмотреть все" : "Скрыть"}
      </button>
    </div>
  );
};

export default SpecializationFilter;
