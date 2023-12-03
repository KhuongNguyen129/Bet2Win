import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateGameThunk, getGameThunk } from "../../store/games";
import { useModal } from "../../context/Modal";

export default function UpdateGame({ gameId }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { closeModal } = useModal();

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
      setTeam1(response.team_1_id);
      setTeam2(response.team_2_id);
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
    formData.append("team_1_id", team1);
    formData.append("team_2_id", team2);
    formData.append("spread_1", spread1);
    formData.append("spread_2", spread2);
    formData.append("total", total);
    formData.append("active", active);

    dispatch(updateGameThunk(formData, gameId));
    closeModal();
    history.push(`/games/${gameId}`);
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
            <label>team1</label>
            <input
              type="number"
              value={team1}
              onChange={(e) => setTeam1(e.target.value)}
            />
          </div>

          <div>
            <label>team2</label>
            <input
              type="number"
              value={team2}
              onChange={(e) => setTeam2(e.target.value)}
            />
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
          <div>
            <label>active</label>
            <input
              type="number"
              value={active}
              onChange={(e) => setActive(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
