import "../../styles/root/NavBar.css";
import CustomLink from "./CustomLink.jsx";

function NavBar() {
  return (
    <nav id="root-nav">
      <ul>
        <CustomLink href={"/"}>Home</CustomLink>
      </ul>
    </nav>
  );
}

export default NavBar;
