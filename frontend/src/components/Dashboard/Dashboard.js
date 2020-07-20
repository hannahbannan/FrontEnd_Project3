import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";
import apiUrl from "../apiConfig";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [fave, isFave] = useState(false);

  
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

  console.log(users);

  let randomUser = users[Math.floor(Math.random() * users.length)];
  console.log(randomUser);

  const toggleFavorite = () => {
    console.log('favorited');
    console.log(randomUser.firstName)
}


  if (!randomUser) {
    return <h2>Loading your next match....</h2>;
  } else {
    return (
      <div className="dashboard">
        <div className="user-info">
          <img src={randomUser.image} className="user-image"/>
          <h2>{randomUser.firstName}</h2>
          <h4>{randomUser.age} years old</h4>
          <h4>{randomUser.location}</h4>
          <p>Hobbies before COVID: {randomUser.hobbiesBefore}</p>
          <p>Hobbies after COVID: {randomUser.hobbiesAfter}</p>
        </div>
        <div className="buttons">
          <button>Dislike</button>
          <button onClick={toggleFavorite}>Like</button>
        </div>
      </div>
    );
  }
};

export default Dashboard;
