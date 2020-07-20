import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <header>
        <div className="header">
      <h1>COVating<img src="https://res.cloudinary.com/dz449ufvx/image/upload/c_scale,w_83/v1595274120/meet%20the%20team/142471454-coronavirus-seamless-pattern-vector-back_1_svfxrc.png" alt="luvbug"></img></h1>
      <h2> About Us</h2>
      </div>
      </header>
      <h3>A dating application where the user can create a profile, and view other user profiles to find a match. The user can then chat with the users in their favorites, or the users they matched with. Provides a platform for the user to connect with people who may have antibodies, or the opposite.</h3>
      <main>
        <h4>Meet the Team</h4>
        <div className="container">
        <div classname="jordan">
            <h5>Jordan Larson</h5>
          <p><img src="https://res.cloudinary.com/dz449ufvx/image/upload/c_scale,r_30,w_100/v1595281130/meet%20the%20team/Screen_Shot_2020-07-20_at_2.32.17_PM_gqiarq.png" alt="naama"></img>(insert roles here)</p>
          </div>
          <div className="naama">
            <h5>Naama Paulemont</h5>
            <p><img src="https://res.cloudinary.com/dz449ufvx/image/upload/c_scale,r_22,w_100/v1595276465/meet%20the%20team/IMG_2066_1_gcqi3b.jpg" alt="naama"></img>
            (insert roles here)</p>
            </div>
          <div className="anthony">
          <h5>Anthony Hart</h5>
            <p><img src="https://res.cloudinary.com/dz449ufvx/image/upload/c_thumb,q_99,r_30,w_100/a_0/v1595274597/meet%20the%20team/IMG_3290_2_tmfkzk.jpg" alt="anthony"></img>
            (insert roles here)</p>
            </div>
          <div className="hannah">
            <h5>Hannah Bannan</h5>
            <p><img src="https://res.cloudinary.com/dz449ufvx/image/upload/c_scale,r_27,w_100/v1595276765/meet%20the%20team/IMG_2046_2_roc3bt.jpg" alt="hannah"></img>
            (insert roles here)</p>
            </div>
        </div>
      </main>
    </div>
  );
}