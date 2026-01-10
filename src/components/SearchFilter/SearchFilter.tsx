import styles from "./SearchFilter.module.css";
import searchIcon from "../../shared/assets/icons/search.svg";
import { setSearch } from "../../store/slices/filter";
import { useAppDispatch } from "../../store";

const SearchFilter = () => {
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        onChange={handleInputChange}
        className={styles.input}
        type="text"
        placeholder="Введите запрос..."
      ></input>
      <img src={searchIcon} alt="Search" className={styles.searchIcon} />
    </div>
  );
};

export default SearchFilter;
