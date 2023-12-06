import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBetThunk } from "../../store/bets";
import { useModal } from "../../context/Modal";
import "../CreateBet/CreateBet.css";

export default function CreateNewBet({ gameId }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { closeModal } = useModal();

  const [spread1Bet, setSpread1Bet] = useState(0);
  const [spread2Bet, setSpread2Bet] = useState(0);
  const [overBet, setOverBet] = useState(0);
  const [underBet, setUnderBet] = useState(0);

  const [validationErrors, setValidationErrors] = useState({});
  const game = useSelector((state) => state.games.allGames[gameId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validationErrors.message) {
      return;
    }

    const formData = new FormData();
    formData.append("spread_1_input", spread1Bet);
    formData.append("spread_2_input", spread2Bet);
    formData.append("over_input", overBet);
    formData.append("under_input", underBet);
    formData.append("game_id", game.id);

    await dispatch(createBetThunk(formData));
    closeModal();
    history.push(`/bets`);
  };

  useEffect(() => {
    const errObj = {};

    if (!spread1Bet && !spread2Bet && !overBet && !underBet)
      errObj.message = "At least 1 field is required";
    setValidationErrors(errObj);
  }, [spread1Bet, spread2Bet, overBet, underBet]);

  return (
    <>
      <h1 className="h1-create-game">Create a Bet</h1>
      {validationErrors.message && (
        <p className="error create-bet-err">{validationErrors.message}</p>
      )}
      <div id="main-container">
        <form onSubmit={handleSubmit}>
          <div className="game-info-container">
            <div className="first-container">
              <div className="time-container">
                <p className="time1">Time</p>
                <p className="time">{game.time}:00</p>
              </div>
              <div className="team-container">
                <p>Teams</p>
                <div className="team-1-container">
                  <img
                    src={game.team_1.logo}
                    style={{ width: "80px", height: "60px" }}
                  />
                  <p>{game.team_1.name}</p>
                </div>
                <div className="team-2-container">
                  <img
                    src={game.team_2.logo}
                    style={{ width: "80px", height: "60px" }}
                  />
                  <p>{game.team_2.name}</p>
                </div>
              </div>

              <div className="spread-container">
                <p className="spread">Spread</p>

                <p className="spread1">{game.spread_1}</p>

                <p className="spread1">{game.spread_2}</p>
              </div>
              <div className="bet-money field1">
                <p>Your Bets</p>
                <div className="input1">
                  <input
                    type="number"
                    value={spread1Bet}
                    onChange={(e) => setSpread1Bet(e.target.value)}
                  />
                </div>
                <div className="input2">
                  <input
                    type="number"
                    value={spread2Bet}
                    onChange={(e) => setSpread2Bet(e.target.value)}
                  />
                </div>
              </div>
              <div className="total-info-box">
                <p className="total">Total</p>

                <p className="total-bet">Under {game.total}</p>
                <p className="total-bet">Over {game.total}</p>
              </div>

              <div className="bet-money">
                <p>Your Bets</p>
                <div className="input1">
                  <input
                    type="number"
                    value={underBet}
                    onChange={(e) => setUnderBet(e.target.value)}
                  />
                </div>
                <div className="input2">
                  <input
                    type="number"
                    value={overBet}
                    onChange={(e) => setOverBet(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="submit-create">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
