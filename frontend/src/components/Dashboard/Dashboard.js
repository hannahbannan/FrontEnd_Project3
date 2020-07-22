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
          <div className="img-crop">
          <img src={randomUser.image} className="user-image" alt="profile-pic"/></div>
          <p className="first-name" >{randomUser.firstName}</p>
          <p className="user-age">{randomUser.age} years old</p>
          <p className="user-location">{randomUser.location}</p>
          <div className="hobbies-before"><p><span>Hobbies before COVID</span><br/> {randomUser.hobbiesBefore}</p></div>
          <div className="hobbies-after"><p><span>Hobbies after COVID</span><br/> {randomUser.hobbiesAfter}</p></div>
        </div>
        <div className="buttons">
          <button className="dislike-btn" onClick={() => dislike()}>Dislike</button>
          <button className="like-btn" onClick={() =>toggleFavorite(randomUser)} >Like</button>
        </div>
      </div>
    );
  }
};

export default Dashboard;
