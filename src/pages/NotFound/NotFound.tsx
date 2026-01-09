import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Страница не найдена</h2>
        <p className={styles.text}>
          К сожалению, по этому адресу страница не существует или была удалена.
        </p>

        <Link to="/" className={styles.button}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
