import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBetThunk } from "../../store/bets";
import { getAllTeamsThunk } from "../../store/teams";

export default function CreateNewBet({ gameId }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [spread1Bet, setSpread1Bet] = useState("");
  const [spread2Bet, setSpread2Bet] = useState("");
  const [overBet, setOverBet] = useState("");
  const [underBet, setUnderBet] = useState("");

  const [validationErrors, setValidationErrors] = useState({});
  const game = useSelector((state) => state.games.allGames[gameId]);
  console.log("🚀 >>>>>>>>>> ~ game from bet:", game);
  const teams = useSelector((state) => state.teams.allTeams);
  const teamObj = Object.values(teams);
  console.log("🚀 >>>>>>>>>> ~ teamObj from bet:", teamObj);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("spread_1_input", spread1Bet);
    formData.append("spread_2_input", spread2Bet);
    formData.append("over_input", overBet);
    formData.append("under_input", underBet);

    await dispatch(createBetThunk(formData));

    history.push(`/bets`);
  };

  useEffect(() => {
    dispatch(getAllTeamsThunk());
  }, [dispatch]);

  useEffect(() => {
    const errObj = {};

    if (!spread1Bet && !spread2Bet && !overBet && !underBet)
      errObj.team1 = "At least 1 field is required";
    setValidationErrors(errObj);
  }, [spread1Bet, spread2Bet, overBet, underBet]);

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
