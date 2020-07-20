import React from "react";
import {Route} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
<<<<<<< HEAD
=======
import Dashboard from "./components/Dashboard/Dashboard"

>>>>>>> 2b2018a12522db2a1a2d394c1e7ada62bcd8d9ea
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
