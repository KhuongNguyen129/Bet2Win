import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGameThunk } from "../../store/games";
import { useModal } from "../../context/Modal";
import { getAllBetsThunk } from "../../store/bets";
import { updateBetThunk } from "../../store/bets";
import { useSelector } from "react-redux";
import "../UpdateBets/UpdateBets.css";

export default function UpdateBet({ betId }) {
  const bet = useSelector((state) => state.bets.allBets[betId]);
  const dispatch = useDispatch();

  const { closeModal } = useModal();

  const [spread1Bet, setSpread1Bet] = useState(bet.spread_1_input || 0);
  const [spread2Bet, setSpread2Bet] = useState(bet.spread_2_input || 0);
  const [overBet, setOverBet] = useState(bet.over_input || 0);
  const [underBet, setUnderBet] = useState(bet.under_input || 0);
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    dispatch(getAllBetsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getGameThunk(betId));
  }, [dispatch, betId]);

  useEffect(() => {
    const errObj = {};

    if (!spread1Bet && !spread2Bet && !overBet && !underBet)
      errObj.message = "At least 1 field is required";

    setErrors(errObj);
  }, [spread1Bet, spread2Bet, overBet, underBet]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.message) return;

    const formData = new FormData();
    formData.append("spread_1_input", spread1Bet);
    formData.append("spread_2_input", spread2Bet);
    formData.append("over_input", overBet);
    formData.append("under_input", underBet);

    await dispatch(updateBetThunk(formData, betId));
    if (Object.entries(errors).length === 0) {
      closeModal();
    }
    setSubmit(true);
  };

  return (
    <>
      <h1 className="h1-update-bet">Update Your Bet</h1>
      {submit && errors.message && (
        <p className="error create-bet-err">{errors.message}</p>
      )}

      <div className="update-main-container">
        <form onSubmit={handleSubmit}>
          <div className="update-container-2">
            <label>Spread for team 1</label>
            <div className="update-input">
              <input
                type="number"
                value={spread1Bet}
                onChange={(e) => setSpread1Bet(Math.max(0, e.target.value))}
              />
            </div>

            <div>
              <label>Spread for team 2</label>
              <div className="update-input">
                <input
                  type="number"
                  value={spread2Bet}
                  onChange={(e) => setSpread2Bet(Math.max(0, e.target.value))}
                />
              </div>
            </div>

            <div>
              <label>Under</label>
              <div className="update-input">
                <input
                  type="number"
                  value={underBet}
                  onChange={(e) => setUnderBet(Math.max(0, e.target.value))}
                />
              </div>
            </div>

            <div>
              <label>Over</label>
              <div className="update-input">
                <input
                  type="number"
                  value={overBet}
                  onChange={(e) => setOverBet(Math.max(0, e.target.value))}
                />
              </div>
            </div>
          </div>
          <div className="button-update-bet">
            <button className="all-button update" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
