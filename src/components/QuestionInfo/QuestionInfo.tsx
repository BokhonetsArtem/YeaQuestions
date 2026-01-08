import styles from "./QuestionInfo.module.css";
import type { IQuestion } from "../../store/services/questionApi";
import Skeleton from "../Skeleton/Skeleton";

type QuestionInfoProps = {
  question: Pick<
    IQuestion,
    "title" | "description" | "longAnswer" | "shortAnswer" | "imageSrc"
  >;
};

const QuestionInfo = ({ question }: QuestionInfoProps) => {
  const { title, longAnswer, shortAnswer, description, imageSrc } = question;

  return (
    <div className={styles.questionInfo}>
      <div className={styles.titleBlock}>
        {imageSrc ? (
          <img
            className={styles.titleImg}
            src={imageSrc}
            alt="Image for question"
          />
        ) : (
          <Skeleton />
        )}

        <div className={styles.titleText}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.shortAnswer}>
        <h3 className={styles.answerTitle}>Краткий ответ</h3>
        <div
          className={styles.answerText}
          dangerouslySetInnerHTML={{ __html: shortAnswer }}
        ></div>
      </div>
      <div className={styles.longAnswer}>
        <h3 className={styles.answerTitle}>Развернутый ответ</h3>
        <div
          className={styles.answerText}
          dangerouslySetInnerHTML={{ __html: longAnswer }}
        ></div>
      </div>
    </div>
  );
};

export default QuestionInfo;
