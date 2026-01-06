import { useGetQuestionsQuery } from "../../store/services/questionApi";
import Pagination from "../Pagination/Pagination";
import QuestionItem from "../QuestionItem/QuestionItem";
import styles from "./QuestionsList.module.css";

const QuestionsList = () => {
  const { data: questions = [], isLoading } = useGetQuestionsQuery();

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className={styles.list}>
      <h3>Вопросы React, JavaScript</h3>
      <ul>
        {questions.map((question) => {
          return <QuestionItem key={question.id} question={question} />;
        })}
      </ul>
      <Pagination />
    </div>
  );
};

export default QuestionsList;
