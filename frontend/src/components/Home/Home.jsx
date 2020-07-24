import React from "react";
import "./Home.css";
import Login from "../containers/Login"
const Home = () => {
  return (
    <div className="home-page">
      <div className="form-sidebar">
        <div className="antibody-tagline">Antibody Can Join</div>
        <Login />
      </div>

      <div className="main-vector">
        <img
          id="vector-img"
          src="https://res.cloudinary.com/dzfyk3r12/image/upload/v1595467852/2857717-eps_2_1_1_hkgty6.png" alt="couple holding heart vector"
        ></img>
      </div>
    </div>
  );
};
export default Home;
