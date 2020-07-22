import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import apiUrl from "../apiConfig";
import "./Favorites.css";

const Favorite = (props) => {
  const [faves, setFaves] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await Axios(`${apiUrl}/users/favorites`);
        setFaves(response.data.favoritedUsers);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const favesArray = faves.map((item) => (
    <div className="ind-fave">
      <Link to={`/favorites/${item._id}`} key={item._id}>
        <div className="fave-user-container">
          <div className="image">
            <img src={item.image} alt="profile-pic" className="fave-img" />
          </div>
          <p className="fave-name">{item.firstName}</p>
        </div>
      </Link>
      <div className="chat-container">
        <Link to="/messages">Chat</Link>
      </div>
    </div>
  ));

  return (
    <div>
      <h2 className="page-title">Your Favorites</h2>
      {favesArray}
    </div>
  );
};

export default Favorite;
