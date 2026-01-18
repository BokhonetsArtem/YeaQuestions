import styles from "./EmptyList.module.css";

interface EmptyListProps {
  title?: string;
  description?: string;
}

const EmptyList = ({
  title = "Ничего не найдено",
  description = "Попробуй изменить фильтры или ключевые слова в поиске.",
}: EmptyListProps) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default EmptyList;
