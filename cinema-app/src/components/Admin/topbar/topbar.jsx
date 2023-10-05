import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Movie Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
          </div>
          <Link to={"/logout"}>Đăng xuất</Link>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
