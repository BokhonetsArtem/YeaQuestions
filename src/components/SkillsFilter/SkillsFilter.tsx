import { useState } from "react";
import styles from "./SkillsFilter.module.css";
import { useGetSkillsQuery } from "../../store/services/skillsApi";

const SkillsFilter = () => {
  const [allItems, setAllItems] = useState(false);

  const { data: items = [] } = useGetSkillsQuery();

  const previewItems = items.slice(0, 8);
  const restItems = items.slice(8);

  return (
    <div className={styles.skillsBlock}>
      <h5>Навыки</h5>
      <div className={styles.itemWrapper}>
        {previewItems.map((item) => {
          return (
            <button className={styles.button} key={item.id}>
              <img
                src={item.imageSrc}
                alt="Skill's image"
                width={18}
                height={18}
              />
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
                <img
                  src={item.imageSrc}
                  alt="Skill's image"
                  width={18}
                  height={18}
                />
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

export default SkillsFilter;
