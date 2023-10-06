import "./sidebar.css";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <li className="sidebarListItem active">Home</li>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link to={"/admin/user"}>Users</Link>
            </li>
            <li className="sidebarListItem">
              <Link to={"/admin/film"}>Films</Link>
            </li>
            <li className="sidebarListItem">
              <Link to={"/admin/ticket"}>Ticket</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
