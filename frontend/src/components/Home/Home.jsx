import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-page">
      <div className="form-sidebar">
        <div className="antibody-tagline">Antibody Can Join</div>
        <Link to="/register">
          <button className="register-btn">Create A Profile</button>
        </Link>
      </div>

      <div className="main-vector">
        <img
          id="vector-img"
          src="https://res.cloudinary.com/dzfyk3r12/image/upload/v1595467852/2857717-eps_2_1_1_hkgty6.png"
        ></img>
      </div>
    </div>
  );
};
export default Home;
