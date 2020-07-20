import React from "react";
import {Route} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
function App() {
 

  return (
    <div className="App">
      <header>
      <h1>COVATING APP</h1>
      <Nav />
      </header>
      <main>
        <Route path="/dashboard" component={Dashboard} />
      </main>

    </div>
  );
}

export default App;
