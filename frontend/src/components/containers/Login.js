import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
import apiUrl from "../apiConfig";

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
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
