import { useState } from "react";
import styles from "./SkillsFilter.module.css";
import { useGetSkillsQuery, type ISkill } from "@/5_entities/skills";
import { toggleSkills } from "../../model/filterSlice";
import { ButtonForFilter } from "@/6_shared/UI";
import skillImgSkeleton from "@/6_shared/assets/icons/skills-image-skeleton.svg";
import { useAppDispatch } from "@/6_shared/storeHooks";

const SkillsFilter = () => {
  const [allItems, setAllItems] = useState(false);
  const dispatch = useAppDispatch();
  const [selectedSkillsIds, setSelectedSkillsIds] = useState<string[]>([]);

  const { data: items = [] } = useGetSkillsQuery();

  const previewItems = items.slice(0, 4);
  const restItems = items.slice(4);

  const handleClick = (item: ISkill) => {
    dispatch(toggleSkills(item));
    setSelectedSkillsIds((prev) =>
      prev.includes(item.id)
        ? prev.filter((id) => id !== item.id)
        : [...prev, item.id],
    );
  };

  return (
    <div className={styles.skillsBlock}>
      <h5>Навыки</h5>
      <div className={styles.itemWrapper}>
        {previewItems.map((item) => {
          return (
            <ButtonForFilter
              onClick={() => handleClick(item)}
              key={item.id}
              selected={selectedSkillsIds.includes(item.id)}
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
                selected={selectedSkillsIds.includes(item.id)}
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
