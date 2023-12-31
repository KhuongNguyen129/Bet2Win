import React from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { deleteGameThunk } from "../../store/games";
import "../DeleteGame/DeleteGame.css";

export default function DeleteButton({ gameId }) {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(deleteGameThunk(gameId));
    history.push(`/games`);
    closeModal();
  };

  const closeTheModel = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <>
      <div id="delete-container">
        <h2>Confirm Delete</h2>
        <h3>Are you sure you want to remove this game?</h3>
        <button id="delete-button" onClick={handleSubmit}>
          Yes (Delete Game)
        </button>
        <button
          id="keep-button"
          classname="delete-button"
          onClick={closeTheModel}
        >
          No (Keep Spot)
        </button>
      </div>
    </>
  );
}
