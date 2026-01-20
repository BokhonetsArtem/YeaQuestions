import {
  ComplexityFilter,
  RatingFilter,
  SearchFilter,
  SkillsFilter,
  SpecializationFilter,
} from "@/4_features/question/questionFilters";
import styles from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={styles.filters}>
      <SearchFilter />
      <SpecializationFilter />
      <SkillsFilter />
      <ComplexityFilter />
      <RatingFilter />
    </div>
  );
};

export default Filters;
