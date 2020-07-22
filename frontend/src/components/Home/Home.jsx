import React from "react";
import { Link } from "react-router-dom";
import './Home.css'
const Home = () => {
  return (
    <div className="home-page">
      <h2>Antibody Can Join</h2>

      <Link to="/register">
        <button className="register-btn">Create A Profile</button>
      </Link>
    </div>
  );
};
export default Home;
