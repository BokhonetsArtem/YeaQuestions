import SearchFilter from "../SearchFilter/SearchFilter";
import styles from "./Filters.module.css";
import SpecializationFilter from "../SpecializationFilter/SpecializationFilter";
import SkillsFilter from "../SkillsFilter/SkillsFilter";
import ComplexityFilter from "../ComplexityFilter/ComplexityFilter";
import RatingFilter from "../RatingFilter/RatingFilter";

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
