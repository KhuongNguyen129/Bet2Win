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
              src="https://cdn.discordapp.com/attachments/1110721109076221993/1180589140069335110/IMG_0914.jpg"
              alt="Big2Win Logo"
            />
          </NavLink>
        </div>
        <div>
          <NavLink exact to="/games/new">
            Create a New Game
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
