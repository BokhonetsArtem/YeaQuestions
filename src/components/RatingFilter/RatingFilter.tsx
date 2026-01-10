import styles from "./RatingFilter.module.css";
import { rating } from "../../constants";
import { toggleRating } from "../../store/slices/filter";
import { useAppDispatch } from "../../store";

const RatingFilter = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.ratingBlock}>
      <h5>Рейтинг</h5>
      <div className={styles.itemWrapper}>
        {rating.map((rate, index) => {
          return (
            <button
              onClick={() => dispatch(toggleRating(rate))}
              className={styles.button}
              key={index}
            >
              {rate}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RatingFilter;
