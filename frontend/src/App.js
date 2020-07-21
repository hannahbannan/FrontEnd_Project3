import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Dashboard from "./components/Dashboard/Dashboard";
import About from "./components/About";

import Login from "./components/containers/Login";

import Home from "./components/Home/Home";
import RegisterForm from "./components/Register/RegisterForm";
import Preferences from "./components/Register/Preferences";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">
          <h1>COVATING</h1>
        </Link>
        <Nav />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />

        <Route path="/login" component={Login} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/preferences" component={Preferences} />
      </Switch>
    </div>
  );
}

export default App;
