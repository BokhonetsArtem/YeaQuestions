import styles from "./SearchFilter.module.css";
import searchIcon from "@/6_shared/assets/icons/search.svg";
import { useEffect, useState } from "react";
import { useDebounce } from "@/6_shared/hooks/useDebounce";
import { setSearch } from "../../model/filterSlice";
import { useAppDispatch } from "@/6_shared/storeHooks";

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
