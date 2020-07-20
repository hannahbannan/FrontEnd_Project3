import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Preferences from './components/Register/Preferences'
function App() {
  return (
    <div className="App">
      <h1>COVATING APP</h1>
      <Nav />
      <Preferences/>
    </div>
  );
}

export default App;
