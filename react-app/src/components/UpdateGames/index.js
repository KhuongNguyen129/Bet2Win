import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateGameThunk, getGameThunk } from "../../store/games";

export default function UpdateGame({ gameId }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [time, setTime] = useState("");
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [spread1, setSpread1] = useState("");
  const [spread2, setSpread2] = useState("");
  const [total, setTotal] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    dispatch(getGameThunk(gameId)).then((response) => {
      setTime(response.time);
      setTeam1(response.team_1);
      setTeam2(response.team_2);
      setSpread1(response.spread_1);
      setSpread2(response.spread_2);
      setTotal(response.total);
      setActive(response.active);
    });
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
    formData.append("active", active);

    await dispatch(updateGameThunk(formData));
    history.push(`/games/${gameId}`);
  };

  return (
    <>
      <h1>Update Your Game</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Time Play</label>
            <input
              type="text"
              placeholder="Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
}
