import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.loader} />
        <p className={styles.text}>Загружаем данные...</p>
      </div>
    </div>
  );
};

export default Loading;
