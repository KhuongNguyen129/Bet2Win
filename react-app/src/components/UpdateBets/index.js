import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getGameThunk } from "../../store/games";
import { useModal } from "../../context/Modal";
import { getAllBetsThunk } from "../../store/bets";
import { updateBetThunk } from "../../store/bets";
import { useSelector } from "react-redux";
export default function UpdateBet({ betId }) {
  console.log("🚀 >>>>>>>>>> ~ betId from:", betId);
  const bet = useSelector((state) => state.bets.allBets[betId]);
  const dispatch = useDispatch();
  const history = useHistory();
  const { closeModal } = useModal();

  const [spread1Bet, setSpread1Bet] = useState(bet.spread_1_input || 0);
  const [spread2Bet, setSpread2Bet] = useState(bet.spread_2_input || 0);
  const [overBet, setOverBet] = useState(bet.over_input || 0);
  const [underBet, setUnderBet] = useState(bet.under_input || 0);

  useEffect(() => {
    dispatch(getAllBetsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getGameThunk(betId));
  }, [dispatch, betId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("spread_1_input", spread1Bet);
    formData.append("spread_2_input", spread2Bet);
    formData.append("over_input", overBet);
    formData.append("under_input", underBet);

    dispatch(updateBetThunk(formData, betId)).then((res) => {
      history.push(`/bets/${betId}`);
    });
    closeModal();
  };

  return (
    <>
      <h1>Update Your Bet</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Spread for team 1</label>
          <div>
            <input
              type="number"
              value={spread1Bet}
              onChange={(e) => setSpread1Bet(e.target.value)}
            />
          </div>

          <div>
            <label>Spread for team 2</label>
            <div>
              <input
                type="number"
                value={spread2Bet}
                onChange={(e) => setSpread2Bet(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label>Under</label>
            <div>
              <input
                type="number"
                value={underBet}
                onChange={(e) => setUnderBet(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label>Over</label>
            <div>
              <input
                type="number"
                value={overBet}
                onChange={(e) => setOverBet(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
