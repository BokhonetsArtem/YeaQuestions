import { useState } from "react";
import styles from "./QuestionsList.module.css";
import { limit } from "@/6_shared/constants";
import { QuestionItem, useGetQuestionsQuery } from "@/5_entities/question";
import { EmptyList, Loading } from "@/6_shared/UI";
import { Pagination } from "@/4_features/question/pagination";
import { useAppSelector } from "@/6_shared/storeHooks";

const QuestionsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const filters = useAppSelector((state) => state.filterReducer);

  const params = { ...filters, page: currentPage, limit };

  const { data, isLoading } = useGetQuestionsQuery(params);

  const questions = data?.data ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / limit);

  if (isLoading) {
    return <Loading />;
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
      {questions.length !== 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          handlePageClick={handlePageClick}
        />
      )}
    </div>
  );
};

export default QuestionsList;
