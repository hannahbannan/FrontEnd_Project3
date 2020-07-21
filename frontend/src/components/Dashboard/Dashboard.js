import React, { useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import apiUrl from "../apiConfig";

const Dashboard = ({finalData}) => {

  const [users, setUsers] = useState(finalData[0]);
  const [randomUser, setRandomUser] = useState(users[Math.floor(Math.random() * users.length)]);

  const toggleFavorite = async (user) => {
    try {
      user.isFavorite = true;
      await axios.put(`${apiUrl}/users/${randomUser._id}`, user);
    } catch (err) {
      console.error(err)
    }
    console.log(randomUser.isFavorite);
    let indexToRemove = users.indexOf(randomUser);
    let splicedUsers = [...users]
    splicedUsers.splice(indexToRemove, 1);
    console.log(splicedUsers);
    setUsers(splicedUsers);
    setRandomUser(users[Math.floor(Math.random() * users.length)])
  };

  const dislike = () => {
    let indexToRemove = users.indexOf(randomUser);
    let splicedUsers = [...users]
    splicedUsers.splice(indexToRemove, 1);
    console.log(splicedUsers);
    setUsers(splicedUsers);
    setRandomUser(users[Math.floor(Math.random() * users.length)])
  };

  if (!randomUser) {
    return <h2>Loading your next match....</h2>;
  } else {
    return (
      <div className="dashboard">
        <div className="user-info">
          <img src={randomUser.image} className="user-image" alt="profile-pic"/>
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
