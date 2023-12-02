import React from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.css"; // Import the CSS file

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="redirect-link">
        <NavLink exact to="/games">
          NFL
        </NavLink>
      </div>
    </div>
  );
};

export default Homepage;
