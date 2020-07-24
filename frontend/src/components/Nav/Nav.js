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
              <Link to="/preferences">Find Matches</Link>
              
              <Link to="/favorites">Favorites</Link>
              
              <Link to="/login">Login</Link>
              <Link to="/myprofile">My Profile</Link>
              <Link to="/CovidTips">Covid-19 Tips</Link>
              <Link to="/about">About Covid-18+</Link>
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
