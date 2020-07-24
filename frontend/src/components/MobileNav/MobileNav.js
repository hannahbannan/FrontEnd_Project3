import React from "react";
import "./MobileNav.css";
import { Link } from "react-router-dom";

const MobileNav = ({ handleClick, open }) => {
  return open ? (
    <div className="mobile-nav">
      <h3 onClick={handleClick} className="exit">
        X
      </h3>
      <Link to="/preferences" onClick={handleClick}>
        Find Matches
      </Link>
      <Link to="/favorites" onClick={handleClick}>
        Favorites
      </Link>
      <Link to="/login" onClick={handleClick}>
        Login
      </Link>
      <Link to="/myprofile" onClick={handleClick}>
        My Profile
      </Link>
      <Link to="/CovidTips" onClick={handleClick}>
        Covid-19 Tips
      </Link>
      <Link to="/about" onClick={handleClick}>
        About Covid-18+
      </Link>
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
