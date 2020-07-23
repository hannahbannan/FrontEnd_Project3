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
        </div>
      </Link>
      <div className="fave-name">
        <Link to={`/favorites/${item._id}`} key={item._id}>
          <p>{item.firstName}</p>
        </Link>
      </div>
      <div className="chat-container">
        <Link to={`/messages/${item.username}`}>Chat</Link>
      </div>
    </div>
  ));

  return (
    <div>
      <h2 className="page-title">Favorites</h2>
      <div className="all-fave-container">{favesArray}</div>
    </div>
  );
};

export default Favorite;
