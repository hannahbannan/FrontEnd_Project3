import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
import apiUrl from "../apiConfig";
import {Link} from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const makeAPICall = async () => {
      console.log(username, password);

      const response = await axios(
        `${apiUrl}/users/login?username=${username}&password=${password}`
      );
      console.log("login response");
      console.log(response);
      document.cookie = "username=" + response.data.username;
    };
    makeAPICall();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="username" bsSize="large">
          <FormLabel>Username</FormLabel>
          <FormControl
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='input-field'
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className='input-field'
          />
        </FormGroup>
        <Link to='/favorites'>
        <Button block bsSize="large" disabled={!validateForm()} type="submit" className="register-btn">
          Login
        </Button>
        </Link>
      </form>
      <br/>
      <br />
      <div className="divider"></div>
      <br/>
      <p>Don't have a profile yet?</p>
      <Link to='/register'><button className="register-btn">Create a profile</button></Link>
    </div>
  );
}
