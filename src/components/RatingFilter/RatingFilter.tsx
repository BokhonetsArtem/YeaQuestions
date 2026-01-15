import styles from "./RatingFilter.module.css";
import { rating } from "../../constants";
import { toggleRating } from "../../store/slices/filter";
import { useAppDispatch } from "../../store";
import ButtonForFilter from "../ButtonForFilter/ButtonForFilter";

const RatingFilter = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.ratingBlock}>
      <h5>Рейтинг</h5>
      <div className={styles.itemWrapper}>
        {rating.map((rate, index) => {
          return (
            <ButtonForFilter
              onClick={() => dispatch(toggleRating(rate))}
              key={index}
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
