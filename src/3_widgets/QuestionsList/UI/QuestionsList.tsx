import styles from "./QuestionsList.module.css";
import { QuestionItem, useGetQuestionsQuery } from "@/5_entities/question";
import { EmptyList, Loading } from "@/6_shared/UI";
import { useAppSelector } from "@/6_shared/storeHooks";
import { QuestionPagination } from "@/4_features/question/questionPagination";

const QuestionsList = () => {
  const filters = useAppSelector((state) => state.filterReducer);
  const { data, isLoading } = useGetQuestionsQuery(filters);
  const questions = data?.data ?? [];
  const total = data?.total ?? 0;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.list}>
      <h3>Вопросы</h3>
      <ul className={styles.items}>
        {questions.length === 0 ? (
          <EmptyList />
        ) : (
          questions.map((question) => {
            return <QuestionItem key={question.id} question={question} />;
          })
        )}
      </ul>
      {questions.length !== 0 && <QuestionPagination total={total} />}
    </div>
  );
};

export default QuestionsList;
