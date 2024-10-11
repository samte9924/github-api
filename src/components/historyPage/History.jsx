import { useNavigate } from "react-router-dom";
import "../../styles/historyPage/History.css";
import { MdOutlinePersonSearch } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

function History({ history }) {
  const navigate = useNavigate();

  return (
    <div className="history-list">
      {!history ? (
        <div>Your search history is empty.</div>
      ) : (
        history.map((item, index) => (
          <div key={index} className="item">
            <div>
              <span>
                <MdOutlinePersonSearch size={32} />
              </span>
              <span
                onClick={() => navigate(`/users/${item.value}`)}
                className="item-link"
              >
                {item.value}
              </span>
            </div>
            <div>
              <span>
                <IoTimeOutline size={32} />
              </span>
              <span>{item.created_at}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default History;
