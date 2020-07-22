import React, { useState } from "react";
import "./Nav.css";
import Media from "react-media";
import MobileNav from "../MobileNav/MobileNav";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, isOpen] = useState(false);
  const handleClick = () => {
    isOpen(!open);
    console.log(open);
  };

  return (
    <div className="nav">
      <Media query="(min-width: 768px)">
        {(matches) => {
          return matches ? (
            <div className="desktop-nav">
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/favorites">Favorites</Link>
              <p>Messages</p>
              <Link to="/about">About Covating</Link>
              <Link to="/login">Login</Link>
            </div>
          ) : (
            <MobileNav handleClick={handleClick} open={open} />
          );
        }}
      </Media>
    </div>
  );
};

export default Nav;
