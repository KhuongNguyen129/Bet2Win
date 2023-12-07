import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createGameThunk } from "../../store/games";
import { getAllTeamsThunk } from "../../store/teams";
import "../CreateGame/CreateGame.css";
// import { DOUBLE } from "sequelize";

export default function CreateNewGame() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [time, setTime] = useState("");
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [spread1, setSpread1] = useState("");
  const [spread2, setSpread2] = useState("");
  const [total, setTotal] = useState("");
  const [submit, setSubmit] = useState(false);
  // const [active, setActive] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const teams = useSelector((state) => state.teams.allTeams);
  const teamObj = Object.values(teams);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("time", time);
    formData.append("team_1", team1);
    formData.append("team_2", team2);
    formData.append("spread_1", spread1);
    formData.append("spread_2", spread2);
    formData.append("total", total);

    // formData.append("active", active);

    await dispatch(createGameThunk(formData));
    if (Object.keys(validationErrors).length === 0) {
      history.push(`/games`);
    }
    setSubmit(true);
  };

  useEffect(() => {
    dispatch(getAllTeamsThunk());
  }, [dispatch]);

  useEffect(() => {
    const errObj = {};
    if (!time) {
      errObj.time = "Time is required";
    } else if (isNaN(time) || time < 0 || time > 24) {
      errObj.time = "Time must be a number between 0 and 24";
    }
    if (!team1) errObj.team1 = "Team1 is required";
    if (!team2) errObj.team2 = "Team2 is required";
    if (!spread1) errObj.spread1 = "Spread1 is required";
    if (!spread2) errObj.spread2 = "Spread2 is required";
    if (!total) errObj.total = "Total is required";
    // if (team1.id === team2.id)
    //   errObj.message = "Team 1 and team 2 can not be the same";
    // if (!active) errObj.active = "Active is required";
    setValidationErrors(errObj);
  }, [time, team1, team2, spread1, spread2, total]);

  return (
    <>
      <h1 className="h1-create-game">Create a Game</h1>
      <div className="create-game-form-container">
        <form className="create-game-form" onSubmit={handleSubmit}>
          <div className="info-box create">
            <p>Time: </p>
            <input
              type="number"
              placeholder="Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          {submit && validationErrors.time && (
            <p className="error">{validationErrors.time}</p>
          )}

          <div className="info-box create">
            <p>Team1: </p>
            <select value={team1.id} onChange={(e) => setTeam1(e.target.value)}>
              <option value="">Select Team</option>
              {teamObj.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>
          {submit && validationErrors.team1 && (
            <p className="error">{validationErrors.time1}</p>
          )}

          <div className="info-box create">
            <p>Team2: </p>
            <select value={team2.id} onChange={(e) => setTeam2(e.target.value)}>
              <option value="">Select Team</option>
              {teamObj.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>

          <div className="info-box create">
            <p>Spread1: </p>
            <input
              type="number"
              value={spread1}
              onChange={(e) => setSpread1(e.target.value)}
            />
          </div>
          {submit && validationErrors.spread1 && (
            <p className="error">{validationErrors.spread1}</p>
          )}

          <div className="info-box create">
            <p>Spread2: </p>
            <input
              type="number"
              value={spread2}
              onChange={(e) => setSpread2(e.target.value)}
            />
          </div>
          {submit && validationErrors.spread2 && (
            <p className="error">{validationErrors.spread2}</p>
          )}

          <div className="info-box create">
            <p>Total: </p>
            <input
              type="number"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
            />
          </div>
          {submit && validationErrors.total && (
            <p className="error">{validationErrors.total}</p>
          )}
          <div className="submit-create">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
