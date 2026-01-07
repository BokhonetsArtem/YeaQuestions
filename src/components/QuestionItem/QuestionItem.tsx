import { useState } from "react";
import { Link } from "react-router-dom";
import openCloseArrow from "../../shared/assets/icons/open-close-arrow-icon.svg";
import arrowRight from "../../shared/assets/icons/arrow-right.svg";
import circle from "../../shared/assets/icons/circle.svg";
import styles from "./QuestionItem.module.css";

const QuestionItem = ({ question }) => {
  const { id, title, rate, complexity, imageSrc, shortAnswer } = question;
  const [isOpen, setIsOpen] = useState(false);

  const handleClickQuestion = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <li className={styles.item} onClick={handleClickQuestion}>
      <div className={styles.titleBlock}>
        <img src={circle} alt="Circle" />
        <h4>{title}</h4>
        <div className={styles.openCloseArrow}>
          <img
            style={{
              transform: isOpen ? "rotate(180deg)" : "",
            }}
            src={openCloseArrow}
            alt="Open arrow"
          />
        </div>
      </div>

      <div className={`${styles.content} ${isOpen ? "" : styles.close}`}>
        <div className={styles.parameters}>
          <div className={styles.rate}>
            Рейтинг: <span>{rate}</span>
          </div>
          <div className={styles.complexity}>
            Сложность: <span>{complexity}</span>
          </div>
        </div>
        {imageSrc && (
          <img
            className={styles.image}
            src={imageSrc}
            alt="Image with answer"
          />
        )}
        <div
          className={styles.answer}
          dangerouslySetInnerHTML={{ __html: shortAnswer }}
        />
        <Link className={styles.link} to={`/details/${id}`}>
          Подробнее
          <img src={arrowRight} alt="Arrow rigth" />
        </Link>
      </div>
    </li>
  );
};

export default QuestionItem;
