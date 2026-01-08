import arrowBack from "../../shared/assets/icons/open-close-arrow-icon.svg";
import styles from "./ButtonBack.module.css";

const ButtonBack = () => {
  return (
    <button className={styles.backButton}>
      <img className={styles.backIcon} src={arrowBack} alt="Back" />
      Назад
    </button>
  );
};

export default ButtonBack;
