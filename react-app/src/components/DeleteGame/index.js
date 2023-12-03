import React from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { deleteGameThunk } from "../../store/games";

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
      <div>
        <h2>Confirm Delete</h2>
        <h3>Are you sure you want to remove this game?</h3>
        <button onClick={handleSubmit}>Yes (Delete Game)</button>
        <button onClick={closeTheModel}>No (Keep Spot)</button>
      </div>
    </>
  );
}
