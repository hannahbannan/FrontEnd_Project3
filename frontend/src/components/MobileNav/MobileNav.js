import React from "react";
import "./MobileNav.css";
import {Link} from "react-router-dom";

const MobileNav = ({ handleClick, open }) => {
  return open ? (
    <div className="mobile-nav">
      <h3 onClick={handleClick} className="exit">
        X
      </h3>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/Messages">Messages</Link>
      <Link to="/about">About Covating</Link>
    </div>
  ) : (
    <div className="hamburger" onClick={handleClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default MobileNav;
