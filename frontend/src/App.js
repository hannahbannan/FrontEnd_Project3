import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import RegisterForm from './components/RegisterForm'
function App() {
  return (
    <div className="App">
      <h1>COVATING APP</h1>
      <Nav />
      <RegisterForm/>
    </div>
  );
}

export default App;
