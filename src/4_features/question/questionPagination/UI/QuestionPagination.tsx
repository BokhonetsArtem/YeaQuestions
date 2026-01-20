import getPaginationPages from "@/6_shared/utils/getPaginationPages";
import { Pagination } from "@/6_shared/UI";
import { useAppSelector } from "@/6_shared/storeHooks";
import { limit } from "@/6_shared/constants";
import { setCurrentPage } from "../../questionFilters/model/filterSlice";

type QuestionPaginationProps = {
  total: number;
};

const QuestionPagination = ({ total }: QuestionPaginationProps) => {
  const currentPage = useAppSelector(
    (state) => state.filterReducer.currentPage,
  );
  const totalPages = Math.ceil(total / limit);

  const pages = getPaginationPages(currentPage, totalPages);

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
    <Pagination
      pages={pages}
      currentPage={currentPage}
      totalPages={totalPages}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
      handlePageClick={handlePageClick}
    />
  );
};

export default QuestionPagination;
