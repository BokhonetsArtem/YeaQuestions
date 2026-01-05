import { useGetQuestionsQuery } from "../../store/services/questionApi";
import Pagination from "../Pagination/Pagination";

const QuestionsList = () => {
  const { data: questions = [], isLoading } = useGetQuestionsQuery();

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div>
      <ul>
        {questions.map((q) => {
          return <li key={q.id}>{q.title}</li>;
        })}
      </ul>
      <Pagination />
    </div>
  );
};

export default QuestionsList;
