import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { NavLink } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);
  const closeMenu = () => setShowMenu(false);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    closeMenu();
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <button className="top-right-button" onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>
              <NavLink exact to="/games/new">
                <button
                  className="profile-dropdown-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeMenu();
                  }}
                >
                  Create a New Game
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/bets">
                <button
                  className="profile-dropdown-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeMenu();
                  }}
                >
                  Manage Bets
                </button>
              </NavLink>
            </li>
            <li>
              <button
                className="profile-dropdown-button"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </li>
          </>
        ) : (
          <>
            <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
