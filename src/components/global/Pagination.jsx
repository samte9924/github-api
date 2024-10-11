import "../../styles/global/Pagination.css";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  if (totalPages === 1) {
    return (
      <div className="pagination">
        <button disabled className="one-page">
          1
        </button>
      </div>
    );
  }

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(prevPage)}
        disabled={currentPage <= 1}
        className="previous"
      >
        <IoChevronBackOutline size={16} />
      </button>
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={`first ${currentPage === 1 ? "active" : ""}`}
      >
        1
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={`last ${currentPage === totalPages ? "active" : ""}`}
      >
        {totalPages}
      </button>
      <button
        onClick={() => onPageChange(nextPage)}
        disabled={currentPage >= totalPages}
        className="next"
      >
        <IoChevronForwardOutline size={16} />
      </button>
    </div>
  );
}

export default Pagination;
