import "../styles/historyPage/HistoryPage.css";
import { useEffect, useState } from "react";
import { retrieveHistory } from "../utils/retrieveHistory";
import History from "../components/historyPage/History";
import Pagination from "../components/global/Pagination";
import { useNavigate, useParams } from "react-router-dom";

function HistoryPage() {
  const { page } = useParams();
  const navigate = useNavigate();
  const [history, setHistory] = useState(null);

  const itemsPerPage = 8;
  const offset = itemsPerPage * (Number(page) - 1);
  const renderedItems = itemsPerPage * Number(page);

  useEffect(() => {
    setHistory(retrieveHistory());
  }, []);

  const handlePageChange = (newPage) => {
    navigate(`/history/${newPage}`);
  };

  return (
    <div className="history-wrapper">
      {history && (
        <>
          <History
            history={history.slice(
              offset,
              history.length < renderedItems ? history.length : renderedItems
            )}
          />
          <Pagination
            currentPage={Number(page)}
            totalPages={Math.ceil(history.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

export default HistoryPage;
