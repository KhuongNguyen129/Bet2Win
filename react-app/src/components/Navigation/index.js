import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      <div id="top-bar">
        <div className="logo">
          <NavLink to="/games">
            <img
              id="big2win-logo"
              src="https://i.imgur.com/bzS9aoT.jpeg"
              alt="Big2Win Logo"
              style={{ borderRadius: "50%" }}
            />
          </NavLink>
        </div>

        <div className="sign-button">
          {isLoaded && (
            <li>
              <ProfileButton user={sessionUser} />
            </li>
          )}
        </div>
      </div>
    </>
  );
}

export default Navigation;
