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
              src="https://media.discordapp.net/attachments/1110721109076221993/1182375929696227388/IMG_0931.jpg"
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
