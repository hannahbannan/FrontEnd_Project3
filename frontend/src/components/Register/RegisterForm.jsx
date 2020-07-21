import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import apiUrl from "../apiConfig";
const RegisterForm = (props) => {
  const history = useHistory()
  const [input, setInput] = useState({
    firstName: "",
    age: "",
    location: "",
    gender: "",
    hobbiesBefore: "",
    hobbiesAfter: "",
    antibodies: true,
    image: "",
  });
  const [user, setUser] = useState(null);
  const handleChange = (e) => {
    if (input.antibodies === "Yes") {
      input.antibodies = true;
    } else {
      input.antibodies = false;
    }
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: `${apiUrl}/users`,
      method: "POST",
      data: input,
    })
      .then((res) => {
        console.log("inside handle submit response is - ", res);
        setUser({ newUserProfile: res.data });
      })
      .catch(console.error);
    console.log(input);
    //Route to preferences page
    // return <Redirect from="/register" to="/preferences" />
    history.push('/preferences')
  };
  
  //add fileReader to handle image file
  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>What's your first name?</label>
        <input
          type="text"
          value={input.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <br />
        <label>How old are you?</label>
        <input
          value={input.age}
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
          value={input.location}
          name="location"
          onChange={handleChange}
        />
        <br />
        <label>What's your gender</label>
        <input
          type="text"
          value={input.gender}
          onChange={handleChange}
          name="gender"
        />
        <br />
        <label>What were your hobbies before COVID-19?</label>
        <input
          type="text"
          value={input.hobbiesBefore}
          name="hobbiesBefore"
          onChange={handleChange}
        />
        <br />
        <label>What were your hobbies after COVID-19?</label>
        <input
          type="text"
          value={input.hobbiesAfter}
          name="hobbiesAfter"
          onChange={handleChange}
        />
        <br />
        <label>Got COVID Antibodies?</label>
        <input
          type="radio"
          value={input.antibodies}
          name="antibodies"
          value="yesAnti"
          id="yes"
          onChange={handleChange}
        />
        <label htmlFor="true">Yes</label>

        <input
          type="radio"
          value={input.antibodies}
          name="antibodies"
          value="noAnti"
          id="no"
          onChange={handleChange}
        />
        <label htmlFor="false">No</label>
        <br />
        <label>Profile Image URL</label>
        <input
          type="text"
          value={input.image}
          name="image"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Create Profile</button>
      </form>
    </>
  );
};
//test Image https://images.unsplash.com/photo-1552766985-80f8ade49ee9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80
export default RegisterForm
