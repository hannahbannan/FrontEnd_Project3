import React, { useState, useEffect } from "react";
import apiUrl from "../apiConfig";
import axios from "axios";
import { Link, useHistory, Route } from "react-router-dom";
import EditProfileForm from "./EditProfileForm";
import Login from '../containers/Login'
import './MyProfile.css'
const MyProfile = () => {
  const [info, setInfo] = useState(null);
  const currentUser = document.cookie.split("=")[1];
  const [id, setId] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [temp, setTemp] = useState({});
  const history = useHistory();
  let profileInfo;
  useEffect(() => {
    const makeApiCall = async () => {
      try {
        const res = await axios(`${apiUrl}/users/username/${currentUser}`);
        setInfo(res.data.user);
        // console.log("in",)
        setId(res.data.user[0]._id);
      } catch (err) {
        console.error(err);
      }
    };
    makeApiCall();
  }, []);

  if (info) {
    profileInfo = info.map((item) => {
      console.log(item);
      return (
        <>
          <div className="dashboard">
            <div className="user-info">
              <div className="img-crop">
                <img
                  src={item.image}
                  className="user-image"
                  alt="profile-pic"
                />
              </div>
              <p className="first-name">{item.firstName}</p>
              <p className="user-age">{item.age} years old</p>
              <p className="user-location">{item.location}</p>
              <div className="hobbies-before">
                <p>
                  <span>Hobbies before COVID</span>
                  <br /> {item.hobbiesBefore}
                </p>
              </div>
              <div className="hobbies-after">
                <p>
                  <span>Hobbies after COVID</span>
                  <br /> {item.hobbiesAfter}
                </p>
              </div>
            </div>
            <div className="buttons">
              {/* <button className="edit-btn" onClick={() => editProfile()}>
                Edit Profile
              </button> */}
              <Link to='/editprofile'>Edit Profile</Link>
              <button className="destroy-btn" onClick={() => deleteProfile()}>
                Delete Profile
              </button>
            </div>
          </div>
        </>
      );
    });
  }

//   const editProfile = async () => {
//     history.push('/editprofile')
//     // const response = await axios({
//     //   url: `${apiUrl}/users/${id}`,
//     //   method: "PUT",
//     //   data: temp,
//     // });
//     setIsUpdated(true);
//   };

  const deleteProfile = async () => {
    const response = await axios({
      url: `${apiUrl}/users/${id}`,
      method: "DELETE",
    });
    console.log(response.data);
    setIsDeleted(true);
  };

  if (isDeleted) {
    console.log("deleted!");
  }

  if (!document.cookie) {
    return (
      <div className="login-warning">
        You have to log in to view your profile!
        <Login></Login>
        {/* <Link to="/login">Login</Link> */}
      </div>
    );
  }
  return (
    <div className="my-profile-container">
      <div className="profile-title">My Profile</div>
      {profileInfo}
    </div>
  );
};
export default MyProfile;
