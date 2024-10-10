import "../styles/root/Root.css";
import { Outlet, useNavigate } from "react-router-dom";
import SearchBar from "../components/Root/SearchBar";
import { useState } from "react";

function Root() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handlePressedEnter = (e) => {
    if (e.key === "Enter" && username.length > 0) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    navigate(`/users/${username}`);
  };

  return (
    <div className="container">
      <SearchBar
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onClick={handleSubmit}
        onKeyUp={handlePressedEnter}
      />
      <div className="displayed-child">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
