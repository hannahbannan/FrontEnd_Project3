import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Dashboard from "./components/Dashboard/Dashboard";
import About from "./components/About";
import Login from "./components/containers/Login";

function App() {
  return (
    <div className="App">
      <header>
        <h1>COVATING APP</h1>
        <Nav />
      </header>
      <main>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
      </main>
    </div>
  );
}

export default App;
