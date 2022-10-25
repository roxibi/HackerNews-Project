import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header">
        <div className="header-navbar-flex">
      <p className="logo">HackerNews</p>
      <Navbar />
      </div>
      <div className="login">login</div>
    </div>
  );
}

export default Header;
