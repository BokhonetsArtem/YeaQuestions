import styles from "./QuestionSidebar.module.css";
import type { IQuestion } from "../../store/services/questionApi";

type QuestionSidebarProps = {
  question: Pick<
    IQuestion,
    "keywords" | "rate" | "complexity" | "questionSkills"
  >;
};

const QuestionSidebar = ({ question }: QuestionSidebarProps) => {
  const { keywords, rate, complexity, questionSkills } = question;

  return (
    <div className={styles.questionSidebar}>
      <div className={styles.lvl}>
        <h4 className={styles.title}>Уровень:</h4>
        <div className={styles.lvlButtons}>
          <button className={styles.indicator}>
            Сложность: <span className={styles.value}>{complexity}</span>
          </button>
          <button className={styles.indicator}>
            Рейтинг: <span className={styles.value}>{rate}</span>
          </button>
        </div>
      </div>
      <div className={styles.skills}>
        <h4 className={styles.title}>Навыки:</h4>
        <div className={styles.skillsButtons}>
          {questionSkills.map((skill, index) => {
            return (
              <button className={styles.skillBtn} key={index}>
                <img
                  className={styles.skillImg}
                  src={skill.imageSrc}
                  alt="Skill"
                />
                {skill.title}
              </button>
            );
          })}
        </div>
      </div>
      <div className={styles.keywords}>
        <h4 className={styles.title}>Ключевые слова:</h4>
        <div className={styles.hashtags}>
          {keywords.map((word, index) => {
            return <a className={styles.word} key={index}>{`#${word}`}</a>;
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionSidebar;
