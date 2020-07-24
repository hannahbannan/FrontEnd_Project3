import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <header>
        <p className="about-title"> About Our Site</p>
      </header>
      <div className="about-info-card">
        {" "}
        <p className="about-info">
          This dating application provides a platform for users to connect with people during the coronavirus pandemic who may have antibodies or the opposite. Users can create profiles and view other users' profiles to find a match. The user can then chat with users they are matched with via their favorites section. 
        </p>
      </div>

      <main>
        <div className="team-title-container">
          <p className="team-title">Meet the Team</p>
        </div>

        <div className="container">
          <div className="jordan">
            <p className="team-name">Jordan Larson</p>
            
              <div className="prof-img-crop"><img className="prof-img"
                src="https://res.cloudinary.com/dz449ufvx/image/upload/c_scale,r_30,w_100/v1595281130/meet%20the%20team/Screen_Shot_2020-07-20_at_2.32.17_PM_gqiarq.png"
                alt="jordan"
              ></img></div>
              <p className="jordan-desc">
              Jordan is responsible for the messaging functionality, setting up routes for messaging as well as the user and messages schemas on the backend. In addition to those accomplishments he's also responsible for making the login feature functional and helped style the messages component.
            </p>
          </div>
          <div className="naama">
            <p className="team-name">Naama Paulemont</p>
              <div className="prof-img-crop"> <img className="prof-img"
                src="https://res.cloudinary.com/dz449ufvx/image/upload/c_scale,r_22,w_100/v1595276465/meet%20the%20team/IMG_2066_1_gcqi3b.jpg"
                alt="naama"
              ></img></div>
             <p className="naama-desc">
              Naama set up the core React components including the Registration, Preferences, User Profile, Home and Footer. She oversaw the project structure and helped tie in component relationships. She also incorporated alot of the styling and design across the site.
            </p>
          </div>
          <div className="anthony">
            <p className="team-name">Anthony Hart</p>
            
              <div className="prof-img-crop">  <img className="prof-img"
                src="https://res.cloudinary.com/dz449ufvx/image/upload/c_thumb,q_99,r_30,w_100/a_0/v1595274597/meet%20the%20team/IMG_3290_2_tmfkzk.jpg"
                alt="anthony"
              ></img></div>
            <p className="anthony-desc">
              Anthony helped with setting up the server, users routes, and deployment on the backend. He also helped with the messaging functionality alongside Jordan. In addition to that he is also responsible for creating the About, and Covid Tips components on the app. 
            </p>
          </div>
          <div className="hannah">
            <p className="team-name">Hannah Bannan</p>
            <div className="prof-img-crop"><img className="prof-img"
                src="https://res.cloudinary.com/dz449ufvx/image/upload/c_scale,r_27,w_100/v1595276765/meet%20the%20team/IMG_2046_2_roc3bt.jpg"
                alt="hannah"
              ></img></div>
              <p className="hannah-desc">
              Hannah is responsible for setting up the initial React application as well as working on key React components such as the Dashboard, Favorites, and the Nav. In addition to that Hannah also oversaw the UX by troubleshooting the links, buttons, and other features. Hannah is also responsible for helping style components as well.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
