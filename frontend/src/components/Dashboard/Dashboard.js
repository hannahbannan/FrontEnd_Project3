import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import "./Dashboard.css";
import apiUrl from "../apiConfig";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [faved, setFaved] = useState(false);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`${apiUrl}/users`);
        setUsers(response.data.users);
      } catch (err) {
        console.log(err);
      }
    };
    makeAPICall();
  }, []);

  console.log(users.length);

  let randomUser = users[Math.floor(Math.random() * users.length)];

  const toggleFavorite = async (user) => {
    try {
      user.isFavorite = true;
      await axios.put(`${apiUrl}/users/${randomUser._id}`, user);
    } catch (err) {
      console.error(err)
    }
    console.log(randomUser.isFavorite)
  };

  const dislike = () => {
    console.log("disliked.");
    // console.log(users.indexOf(randomUser));
    let indexToRemove = users.indexOf(randomUser);
    users.splice(indexToRemove, 1);
    console.log(users);
  };

  if (!randomUser) {
    return <h2>Loading your next match....</h2>;
  } else {
    return (
      <div className="dashboard">
        <div className="user-info">
          <img src={randomUser.image} className="user-image" />
          <h2>{randomUser.firstName}</h2>
          <h4>{randomUser.age} years old</h4>
          <h4>{randomUser.location}</h4>
          <p>Hobbies before COVID: {randomUser.hobbiesBefore}</p>
          <p>Hobbies after COVID: {randomUser.hobbiesAfter}</p>
        </div>
        <div className="buttons">
          <button onClick={() => dislike()}>Dislike</button>
          <button onClick={() =>toggleFavorite(randomUser)} >Like</button>
        </div>
      </div>
    );
  }
};

export default Dashboard;
