import styles from "./RatingFilter.module.css";
import { rating } from "../../constants";

const RatingFilter = () => {
  return (
    <div className={styles.ratingBlock}>
      <h5>Рейтинг</h5>
      <div className={styles.itemWrapper}>
        {rating.map((rate, index) => {
          return (
            <button className={styles.button} key={index}>
              {rate}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RatingFilter;
