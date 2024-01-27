import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateGameThunk, getGameThunk } from "../../store/games";
import { useModal } from "../../context/Modal";
import { getAllTeamsThunk } from "../../store/teams";
import "../UpdateGames/UpdateGames.css";

export default function UpdateGame({ gameId }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const teams = useSelector((state) => state.teams.allTeams);
  const teamObj = Object.values(teams);
  const game = useSelector((state) => state.games.allGames[gameId]);
  const { closeModal } = useModal();
  // console.log("🚀 >>>>>>>>>> ~ gamessdfsdf:", game);

  const [time, setTime] = useState(game.time);
  const [team1, setTeam1] = useState(game.team_1.id);
  const [team2, setTeam2] = useState(game.team_2.id);
  const [spread1, setSpread1] = useState(game.spread_1);
  const [spread2, setSpread2] = useState(game.spread_2);
  const [total, setTotal] = useState(game.total);
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  // const [active, setActive] = useState(false);

  useEffect(() => {
    let errorsObj = {};
    if (!time) {
      errorsObj.time = "Time is required";
    } else if (time < 0 || time > 24) {
      errorsObj.time = "Time must be between 0 and 25";
    }

    if (!team1) errorsObj.team1 = "Team 1 is required";
    if (!team2) errorsObj.team2 = "Team 2 is required";
    if (!spread1) errorsObj.spread1 = "Spread 1 is required";
    if (!spread2) errorsObj.spread2 = "Spread 2 is required";
    if (!total) errorsObj.total = "Total is required";

    setErrors(errorsObj);
  }, [time, team1, team2, spread1, spread2, total]);

  useEffect(() => {
    dispatch(getAllTeamsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getGameThunk(gameId));
  }, [dispatch, gameId]);

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
    if (Object.entries(errors).length === 0) {
      await dispatch(updateGameThunk(formData, gameId));
      history.push(`/games/${gameId}`);
      closeModal();
    }
    setSubmit(true);
  };

  return (
    <>
      <h1 className="h1-update-game">Update Your Game</h1>
      <div className="update-game-form-container">
        <form className="update-game-form" onSubmit={handleSubmit}>
          <div className="info-box">
            <p>Time: </p>
            <input
              type="number"
              placeholder="Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          {submit && errors.time && <p className="error">{errors.time}</p>}

          <div className="info-box">
            <p>Team1: </p>
            <select value={team1} onChange={(e) => setTeam1(e.target.value)}>
              {teamObj.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>

          <div className="info-box">
            <p>Team2: </p>
            <select value={team2} onChange={(e) => setTeam2(e.target.value)}>
              {teamObj.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>

          <div className="info-box">
            <p>Spread1: </p>
            <input
              type="number"
              value={spread1}
              onChange={(e) => setSpread1(e.target.value)}
            />
          </div>
          {errors.spread1 && <p className="error">{errors.spread1}</p>}

          <div className="info-box">
            <p>Spread2: </p>
            <input
              type="number"
              value={spread2}
              onChange={(e) => setSpread2(e.target.value)}
            />
          </div>
          {submit && errors.spread2 && (
            <p className="error">{errors.spread2}</p>
          )}

          <div className="info-box">
            <p>Total: </p>
            <input
              type="number"
              value={total}
              onChange={(e) => setTotal(Math.max(0, e.target.value))}
            />
          </div>
          {submit && errors.total && <p className="error">{errors.total}</p>}
          <div className="submit-update">
            <button className="all-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
