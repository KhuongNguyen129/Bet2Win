import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createGameThunk } from "../../store/games";

export default function CreateNewGame() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [time, setTime] = useState("");
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [spread1, setSpread1] = useState("");
  const [spread2, setSpread2] = useState("");
  const [total, setTotal] = useState("");
  const [active, setActive] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

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

    await dispatch(createGameThunk(formData));
    history.push(`/games`);
  };

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
    if (!active) errObj.active = "Active is required";
    setValidationErrors(errObj);
  }, [time, team1, team2, spread1, spread2, total, active]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>CreateTeam</h1>
      </form>
    </>
  );
}
