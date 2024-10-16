import "../../styles/root/SearchBar.css";
import { IoSearchSharp } from "react-icons/io5";

function SearchBar({ value, onChange, onKeyUp, onClick }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Username..."
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
      <button onClick={onClick} disabled={!value}>
        <IoSearchSharp size={32} />
      </button>
    </div>
  );
}

export default SearchBar;
