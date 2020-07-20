import React, { useState } from "react";
import "./MobileNav.css";

const MobileNav = ({ handleClick, open }) => {
  return open ? (
    <div className="mobile-nav">
      <h3 onClick={handleClick} className="exit">
        X
      </h3>
      <p>Dashboard</p>
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
