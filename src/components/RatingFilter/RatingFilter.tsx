import styles from "./RatingFilter.module.css";
import { rating } from "../../constants";
import { toggleRating } from "../../store/slices/filter";
import { useAppDispatch } from "../../store";
import ButtonForFilter from "../ButtonForFilter/ButtonForFilter";
import { useState } from "react";

const RatingFilter = () => {
  const dispatch = useAppDispatch();
  const [selectedRates, setSelectedRates] = useState<number[]>([]);

  const handleClick = (rate: number) => {
    dispatch(toggleRating(rate));

    setSelectedRates((prev) =>
      prev.includes(rate) ? prev.filter((r) => r !== rate) : [...prev, rate]
    );
  };

  return (
    <div className={styles.ratingBlock}>
      <h5>Рейтинг</h5>
      <div className={styles.itemWrapper}>
        {rating.map((rate) => {
          return (
            <ButtonForFilter
              onClick={() => handleClick(rate)}
              key={rate}
              selected={selectedRates.includes(rate)}
            >
              {rate}
            </ButtonForFilter>
          );
        })}
      </div>
    </div>
  );
};

export default RatingFilter;
