import "../../styles/global/Pagination.css";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  return (
    <div className="pagination">
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
          className="first"
        >
          1
        </button>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="last"
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
    </div>
  );
}

export default Pagination;
