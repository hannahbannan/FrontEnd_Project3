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
        Search for love
      </Link>
      <Link to="/favorites" onClick={handleClick}>
        Favorites
      </Link>
      <Link to="/about" onClick={handleClick}>
        About Covid-18+
      </Link>
      <Link to="/login" onClick={handleClick}>
        Login
      </Link>
      <Link to="/myprofile" onClick={handleClick}>
        My Profile
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
