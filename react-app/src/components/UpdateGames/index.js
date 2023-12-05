import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateGameThunk, getGameThunk } from "../../store/games";
import { useModal } from "../../context/Modal";
import { getAllTeamsThunk } from "../../store/teams";

export default function UpdateGame({ gameId }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { closeModal } = useModal();
  const teams = useSelector((state) => state.teams.allTeams);
  const teamObj = Object.values(teams);
  const game = useSelector((state) => state.games.allGames[gameId]);
  console.log("🚀 >>>>>>>>>> ~ gamessdfsdf:", game);

  // const [time, setTime] = useState("");
  // const [team1, setTeam1] = useState("");
  // const [team2, setTeam2] = useState("");
  // const [spread1, setSpread1] = useState("");
  // const [spread2, setSpread2] = useState("");
  // const [total, setTotal] = useState("");

  // // const [active, setActive] = useState(false);
  // useEffect(() => {
  //   dispatch(getAllTeamsThunk());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getGameThunk(gameId)).then((response) => {
  //     setTime(response.time);
  //     setTeam1(response.team_1_id);
  //     setTeam2(response.team_2_id);
  //     setSpread1(response.spread_1);
  //     setSpread2(response.spread_2);
  //     setTotal(response.total);
  //     // setActive(response.active);
  //   });
  // }, [dispatch, gameId]);

  const [time, setTime] = useState(game.time);
  const [team1, setTeam1] = useState(game.team_1);
  const [team2, setTeam2] = useState(game.team_2);
  const [spread1, setSpread1] = useState(game.spread_1);
  const [spread2, setSpread2] = useState(game.spread_2);
  const [total, setTotal] = useState(game.total);

  // const [active, setActive] = useState(false);
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

    await dispatch(updateGameThunk(formData, gameId)).then((res) => {
      history.push(`/games/${gameId}`);
    });
    closeModal();
  };

  return (
    <>
      <h1>Update Your Game</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Time</label>
          <div>
            <input
              type="number"
              placeholder="Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div>
            <label>Team 1</label>
            <select value={team1} onChange={(e) => setTeam1(e.target.value)}>
              <option value="">Select Team</option>
              {teamObj.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Team 2</label>
            <select value={team2} onChange={(e) => setTeam2(e.target.value)}>
              <option value="">Select Team</option>
              {teamObj.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>spread1</label>
            <input
              type="number"
              value={spread1}
              onChange={(e) => setSpread1(e.target.value)}
            />
          </div>

          <div>
            <label>spread2</label>
            <input
              type="number"
              value={spread2}
              onChange={(e) => setSpread2(e.target.value)}
            />
          </div>

          <div>
            <label>total</label>
            <input
              type="number"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
