import "../../styles/root/CustomLink.css";
import { useNavigate } from "react-router-dom";

function CustomLink({ href, children }) {
  const path = window.location.pathname;

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(href)}
      onKeyDown={(e) => e.key === "Enter" && navigate(href)}
      className={"custom-link" + (path === href ? " active" : "")}
      tabIndex={0}
      role="button"
    >
      {children}
    </div>
  );
}

export default CustomLink;
