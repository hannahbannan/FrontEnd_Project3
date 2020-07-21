import React from "react";
import { Route, Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h2>Antibody Can Join</h2>

      <Link to="/register">
        <button>Sign Up Now</button>
      </Link>
    </div>
  );
};
export default Home;
