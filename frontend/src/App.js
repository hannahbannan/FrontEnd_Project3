import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Dashboard from "./components/Dashboard/Dashboard";
import About from "./components/About/About";
import Login from "./components/containers/Login";
import Home from "./components/Home/Home";
import RegisterForm from "./components/Register/RegisterForm";
import Preferences from "./components/Register/Preferences";
import Messages from "./components/messages/Messages";
import Favorites from "./components/Favorite/Favorites";
import FavoritedUser from "./components/FavoritedUser/FavoritedUser";
import Footer from './components/Footer/Footer'
import MyProfile from './components/UserProfile/MyProfile'
function App() {
  const [finalData, setFinalData] = useState([]);
  return (
    <div className="App">
      <header>
        <Nav />
        <Link to="/">
          <div className="logo-title">
            <img
              src="https://res.cloudinary.com/dzfyk3r12/image/upload/v1595379345/142471454-coronavirus-seamless-pattern-vector-back_1_1_cvodot.png"
              alt="logo"
            />
            <p className="main-title">COVID - 18+</p>
          </div>
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/dashboard"
          render={(props) => <Dashboard {...props} finalData={finalData} />}
        />
        <Route path="/about" component={About} />
        <Route path="/messages/:username" component={Messages} />
        <Route path="/favorites/:id" component={FavoritedUser} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={RegisterForm} />
        <Route
          path="/preferences"
          render={(props) => (
            <Preferences
              {...props}
              finalData={finalData}
              setFinalData={setFinalData}
            />
          )}
        />
        <Route path='/myprofile' component={MyProfile}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
