import { useState } from "react";
import styles from "./SkillsFilter.module.css";
import { useGetSkillsQuery } from "../../store/services/skillsApi";
import skillImgSkeleton from "../../shared/assets/images/skill-img-skeleton.svg";
import { useAppDispatch } from "../../store";
import { toggleSkills } from "../../store/slices/filter";
import ButtonForFilter from "../ButtonForFilter/ButtonForFilter";

const SkillsFilter = () => {
  const [allItems, setAllItems] = useState(false);
  const dispatch = useAppDispatch();

  const { data: items = [] } = useGetSkillsQuery();

  const previewItems = items.slice(0, 4);
  const restItems = items.slice(4);

  return (
    <div className={styles.skillsBlock}>
      <h5>Навыки</h5>
      <div className={styles.itemWrapper}>
        {previewItems.map((item) => {
          return (
            <ButtonForFilter
              onClick={() => dispatch(toggleSkills(item))}
              key={item.id}
            >
              <img
                src={skillImgSkeleton}
                alt="Skill's image"
                width={18}
                height={18}
              />
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
                onClick={() => dispatch(toggleSkills(item))}
                key={item.id}
              >
                <img
                  src={skillImgSkeleton}
                  alt="Skill's image"
                  width={18}
                  height={18}
                />
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

export default SkillsFilter;
