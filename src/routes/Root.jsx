import "../styles/root/Root.css";
import { Outlet } from "react-router-dom";
import SideBar from "../components/Root/SideBar";
import NavBar from "../components/Root/NavBar";

function Root() {
  return (
    <>
      <div className="container">
        <SideBar />
        <div className="content-wrapper">
          <NavBar />
          <div className="displayed-child">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Root;
