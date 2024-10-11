import "../styles/historyPage/HistoryPage.css";
import { useEffect, useState } from "react";
import { retrieveHistory } from "../utils/retrieveHistory";
import History from "../components/historyPage/History";

function HistoryPage() {
  const [history, setHistory] = useState(null);

  useEffect(() => {
    setHistory(retrieveHistory());
  }, []);

  return (
    <div className="history-wrapper">
      <History history={history} />
    </div>
  );
}

export default HistoryPage;
