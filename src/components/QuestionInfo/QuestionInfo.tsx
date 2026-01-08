import styles from "./QuestionInfo.module.css";
import type { IQuestion } from "../../store/services/questionApi";

type QuestionInfoProps = {
  question: Pick<
    IQuestion,
    "title" | "description" | "longAnswer" | "shortAnswer"
  >;
};

const QuestionInfo = ({ question }: QuestionInfoProps) => {
  const { title, longAnswer, shortAnswer, description } = question;

  return (
    <div className={styles.questionInfo}>
      <div className={styles.titleBlock}>
        <img className={styles.titleImg} src="/" alt="Image for question" />
        <div className={styles.titleText}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.shortAnswer}>
        <h3 className={styles.answerTitle}>Краткий ответ</h3>
        <div className={styles.answerText}>{shortAnswer}</div>
      </div>
      <div className={styles.longAnswer}>
        <h3 className={styles.answerTitle}>Развернутый ответ</h3>
        <div className={styles.answerText}>{longAnswer}</div>
      </div>
    </div>
  );
};

export default QuestionInfo;
