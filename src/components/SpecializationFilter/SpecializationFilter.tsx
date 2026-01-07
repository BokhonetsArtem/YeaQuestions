import { useState } from "react";
import styles from "./SpecializationFilter.module.css";
import { useGetSpecializationQuery } from "../../store/services/specializationApi";

const SpecializationFilter = () => {
  const [allItems, setAllItems] = useState(false);

  const { data: items = [] } = useGetSpecializationQuery();

  const previewItems = items.slice(0, 5);
  const restItems = items.slice(5);

  return (
    <div className={styles.specializationBlock}>
      <h5>Специализация</h5>
      <div className={styles.itemWrapper}>
        {previewItems.map((item) => {
          return (
            <button className={styles.button} key={item.id}>
              {item.title}
            </button>
          );
        })}
      </div>

      <div className={styles.itemWrapper}>
        {allItems &&
          restItems.map((item) => {
            return (
              <button className={styles.button} key={item.id}>
                {item.title}
              </button>
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
