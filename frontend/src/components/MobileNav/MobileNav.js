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
      <p>Favorites</p>
      <p>Messages</p>
      <p>About Covating</p>
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
