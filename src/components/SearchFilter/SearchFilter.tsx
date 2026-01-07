import styles from "./SearchFilter.module.css";
import searchIcon from "../../shared/assets/icons/search.svg";

const SearchFilter = () => {
  return (
    <div className={styles.searchWrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Введите запрос..."
      ></input>
      <img src={searchIcon} alt="Search" className={styles.searchIcon} />
    </div>
  );
};

export default SearchFilter;
