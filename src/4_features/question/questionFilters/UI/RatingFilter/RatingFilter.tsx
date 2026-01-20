import styles from "./RatingFilter.module.css";
import { useState } from "react";
import { toggleRating } from "../../model/filterSlice";
import { rating } from "@/6_shared/constants";
import { ButtonForFilter } from "@/6_shared/UI";
import { useAppDispatch } from "@/6_shared/storeHooks";

const RatingFilter = () => {
  const dispatch = useAppDispatch();
  const [selectedRates, setSelectedRates] = useState<number[]>([]);

  const handleClick = (rate: number) => {
    dispatch(toggleRating(rate));

    setSelectedRates((prev) =>
      prev.includes(rate) ? prev.filter((r) => r !== rate) : [...prev, rate],
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
