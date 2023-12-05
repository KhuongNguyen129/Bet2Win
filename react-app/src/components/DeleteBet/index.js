import React from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom";
import { deleteBetThunk } from "../../store/bets";

export default function DeleteBet({ betId }) {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(deleteBetThunk(betId));
    history.push(`/bets`);
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
        <h3>Are you sure you want to remove this bet?</h3>
        <button onClick={handleSubmit}>Yes (Delete Bet)</button>
        <button onClick={closeTheModel}>No (Keep Bet)</button>
      </div>
    </>
  );
}
