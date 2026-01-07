import getPaginationPages from "../../helpers/getPaginationPages";
import arrowLeft from "../../shared/assets/icons/arrow-left.svg";
import arrowRight from "../../shared/assets/icons/arrow-right.svg";
import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handlePageClick: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
}: PaginationProps) => {
  const pages = getPaginationPages(currentPage, totalPages);

  return (
    <div className={styles.pagination}>
      <button
        className={styles.btnArrow}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <img src={arrowLeft} alt="Previous page" width={16} height={16} />
      </button>

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={index} className={styles.dots}>
            ...
          </span>
        ) : (
          <button
            key={index}
            className={`${currentPage === index + 1 ? styles.active : ""} ${
              styles.btnNumber
            }`}
            onClick={() => handlePageClick(page as number)}
          >
            {page}
          </button>
        )
      )}

      <button
        className={styles.btnArrow}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <img src={arrowRight} alt="Next page" width={16} height={16} />
      </button>
    </div>
  );
};

export default Pagination;
