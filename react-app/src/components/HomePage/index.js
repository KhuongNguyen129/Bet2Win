import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import ProfileButton from "../ProfileButton";
// import "./Navigation.css";

export default function Hompage() {
  return (
    <>
      <NavLink exact to="/games">
        GameHomePage
      </NavLink>
      <h1>Hompage</h1>
    </>
  );
}
