import "../styles/root/Root.css";
import { Outlet, useNavigate } from "react-router-dom";
import SearchBar from "../components/Root/SearchBar";
import { useState } from "react";

function Root() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    navigate(`/users/${username}`);
  };

  return (
    <div className="container">
      <SearchBar
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onClick={handleSubmit}
      />
      <div className="result">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
