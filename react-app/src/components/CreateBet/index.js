import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBetThunk } from "../../store/bets";
import { useModal } from "../../context/Modal";

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
      <h1>Create Your Bet</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <p>Time</p>
              <p>{game.time}:00</p>
            </div>
            <div>
              <p>Teams</p>
              <div>
                <img
                  src={game.team_1.logo}
                  style={{ width: "60px", height: "50px" }}
                />
                <p>{game.team_1.name}</p>
              </div>
              <div>
                <img
                  src={game.team_2.logo}
                  style={{ width: "60px", height: "50px" }}
                />
                <p>{game.team_2.name}</p>
              </div>
              <div>
                <p>Spread</p>
                <div>
                  <p>{game.spread_1}</p>
                  <input
                    type="number"
                    value={spread1Bet}
                    onChange={(e) => setSpread1Bet(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <p>{game.spread_2}</p>
                <div>
                  <input
                    type="number"
                    value={spread2Bet}
                    onChange={(e) => setSpread2Bet(e.target.value)}
                  />
                </div>
                <div>
                  <p>Total</p>
                  <div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
