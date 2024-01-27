import React from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.css"; // Import the CSS file

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="redirect-link">
        <NavLink exact to="/games">
          READY TO CASH OUT!!!
        </NavLink>
      </div>
      <div className="homepage-text">
        Welcome to Bet2Win! Take a chance as you explore the possibilities of
        winning big today! Are you ready to experience the excitement of betting
        and potential triumph? Join us now!
      </div>
    </div>
  );
};

export default Homepage;
