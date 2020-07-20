import React, { useState } from "react";
import "./Nav.css";
import Media from "react-media";
import MobileNav from "../MobileNav/MobileNav";

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
              <p>Dashboard</p>
              <p>Favorites</p>
              <p>Messages</p>
              <p>About Covating</p>
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
