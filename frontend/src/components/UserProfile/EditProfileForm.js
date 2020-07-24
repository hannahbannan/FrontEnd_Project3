import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiConfig";
import { Redirect } from "react-router-dom";
import currentUser from "../UserProfile/MyProfile";

const EditProfileForm = (props) => {
  const [userInfo, setUserInfo] = useState({
    antibodies: "",
    likesYou: "",
    isFavorite: "",
    firstName: "",
    username: "",
    password: "",
    image: "",
    location: "",
    age: "",
    gender: "",
    hobbiesBefore: "",
    hobbiesAfter: "",
  });
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`${apiUrl}/users/username/${currentUser}`);
        console.log(response.data);
        setUserInfo({ userInfo: response.data });
        console.log(userInfo);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: `${apiUrl}/users/username/${currentUser}`,
      method: "PUT",
      data: userInfo,
    })
      .then(() => setIsUpdated(true))
      .catch(console.error);
    setUserInfo({
      antibodies: "",
      likesYou: "",
      isFavorite: "",
      firstName: "",
      username: "",
      password: "",
      image: "",
      location: "",
      age: "",
      gender: "",
      hobbiesBefore: "",
      hobbiesAfter: "",
    });
  };

  if (isUpdated) {
    return <Redirect to={`/myprofile`} />;
  }

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <label>Edit your first name</label>
      <input
        type="text"
        value={userInfo.firstName}
        name="firstName"
        onChange={handleChange}
      />
      <br />
      <label>Edit your age</label>
      <input
        value={userInfo.age}
        name="age"
        type="number"
        min="18"
        max="120"
        onChange={handleChange}
      />
      <br />
      <label>Where do you live?</label>
      <input
        type="text"
        value={userInfo.location}
        name="location"
        onChange={handleChange}
      />
      <br />
      <label>What's your gender?</label>
      <input
        type="text"
        value={userInfo.gender}
        onChange={handleChange}
        name="gender"
      />
      <br />
      <label>What were your hobbies before COVID-19?</label>
      <input
        type="text"
        value={userInfo.hobbiesBefore}
        name="hobbiesBefore"
        onChange={handleChange}
      />
      <br />
      <label>What were your hobbies after COVID-19?</label>
      <input
        type="text"
        value={userInfo.hobbiesAfter}
        name="hobbiesAfter"
        onChange={handleChange}
      />
      <br />
      <label>Got COVID Antibodies Now?</label>
      <input
        className="radio"
        type="radio"
        value={userInfo.antibodies}
        name="antibodies"
        value="yesAnti"
        id="yes"
        onChange={handleChange}
      />
      <label htmlFor="true" className="radio">
        Yes
      </label>
      <input
        className="radio"
        type="radio"
        value={userInfo.antibodies}
        name="antibodies"
        value="noAnti"
        id="no"
        onChange={handleChange}
      />
      <label htmlFor="false" className="radio">
        No
      </label>
      <br />
      <label>Update your Profile Image URL</label>
      <input
        type="text"
        value={userInfo.image}
        name="image"
        onChange={handleChange}
      />
      <br />
      <label>Edit your username</label>
      <input
        type="text"
        value={userInfo.username}
        name="username"
        onChange={handleChange}
      />
      <br />
      <label>Edit your password</label>
      <input
        type="text"
        value={userInfo.password}
        name="password"
        onChange={handleChange}
      />
      <br />
      <br />
      <button className="create-profile-btn" type="submit">
        Edit Profile
      </button>
    </form>
  );
};

export default EditProfileForm;
