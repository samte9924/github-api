import { AiOutlineHome } from "react-icons/ai";
import "../../styles/root/SideBar.css";
import CustomLink from "./CustomLink";
import { LuHistory } from "react-icons/lu";
import { FiInfo } from "react-icons/fi";

function SideBar() {
  return (
    <aside className="sidebar">
      <CustomLink href="/">
        <AiOutlineHome size={24} />
        <span>Home</span>
      </CustomLink>
      <CustomLink href="/history">
        <LuHistory size={24} />
        <span>History</span>
      </CustomLink>
      <CustomLink href="/about">
        <FiInfo size={24} />
        <span>About</span>
      </CustomLink>
    </aside>
  );
}

export default SideBar;
