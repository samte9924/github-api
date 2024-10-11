import { useNavigate } from "react-router-dom";
import "../../styles/root/NavBar.css";
import SearchBar from "../root/SearchBar";
import { useState } from "react";
import { saveToHistory } from "../../utils/saveToHistory";

function NavBar() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handlePressedEnter = (e) => {
    if (e.key === "Enter" && username.length > 0) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    saveToHistory(username);
    navigate(`/users/${username}`);
  };
  return (
    <nav className="root-nav">
      <SearchBar
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onClick={handleSubmit}
        onKeyUp={handlePressedEnter}
      />
    </nav>
  );
}

export default NavBar;
