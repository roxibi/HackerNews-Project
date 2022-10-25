import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header">
      <p className="logo">HackerNews</p>
      <Navbar />

      <p className="login">login</p>
    </div>
  );
}

export default Header;
