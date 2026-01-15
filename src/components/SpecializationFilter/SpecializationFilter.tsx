import { useState } from "react";
import styles from "./SpecializationFilter.module.css";
import {
  useGetSpecializationQuery,
  type ISpecialization,
} from "../../store/services/specializationApi";
import { toggleSpecialization } from "../../store/slices/filter";
import { useAppDispatch } from "../../store";
import ButtonForFilter from "../ButtonForFilter/ButtonForFilter";

const SpecializationFilter = () => {
  const [allItems, setAllItems] = useState(false);
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
            <ButtonForFilter onClick={() => handleClick(item)} key={item.id}>
              {item.title}
            </ButtonForFilter>
          );
        })}
      </div>

      <div className={styles.itemWrapper}>
        {allItems &&
          restItems.map((item) => {
            return (
              <ButtonForFilter onClick={() => handleClick(item)} key={item.id}>
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
