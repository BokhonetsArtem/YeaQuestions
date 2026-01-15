import styles from "./SearchFilter.module.css";
import searchIcon from "../../shared/assets/icons/search.svg";
import { setSearch } from "../../store/slices/filter";
import { useAppDispatch } from "../../store";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect, useState } from "react";

const SearchFilter = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const debouncedValue = useDebounce(value);

  useEffect(() => {
    dispatch(setSearch(debouncedValue));
  }, [debouncedValue, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        value={value}
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
