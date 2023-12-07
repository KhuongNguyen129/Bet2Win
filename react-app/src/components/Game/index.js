import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getGameThunk } from "../../store/games";
import UpdateGame from "../UpdateGames";
import OpenModalButton from "../OpenModalButton/index";
import DeleteButton from "../DeleteGame";
import CreateNewBet from "../CreateBet";
import "../Game/Game.css";

export default function Game() {
  const { gameId } = useParams();

  const dispatch = useDispatch();
  // const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const game = useSelector((state) => state.games.allGames[gameId]);

  console.log("🚀 >>>>>>>>>> ~ game:", game);

  useEffect(() => {
    dispatch(getGameThunk(gameId));
  }, [dispatch, gameId]);

  // const handleGameUpdate = () => {
  //   history.push(`/games/${gameId}/update`);
  // };

  if (!game) {
    return null;
  }

  return (
    <div id="main-container">
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

          <div className="total-container">
            <p className="total">Total</p>
            <div className="over-under">
              <p className="over">Over/{game.total}</p>
              <p className="under">Under/{game.total}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="button-container">
        {sessionUser && sessionUser.id === game.owner_id ? (
          <div className="button-container">
            <div>
              <OpenModalButton
                className="button-update-game"
                buttonText="Update Game"
                modalComponent={<UpdateGame gameId={gameId} />}
              ></OpenModalButton>
            </div>
            <div className="button-delete-game">
              <OpenModalButton
                buttonText="Delete Game"
                modalComponent={<DeleteButton gameId={gameId} />}
              ></OpenModalButton>
            </div>
          </div>
        ) : (
          <div className="button-bet">
            <OpenModalButton
              buttonText="Bet"
              modalComponent={<CreateNewBet gameId={gameId} />}
            ></OpenModalButton>
          </div>
        )}
      </div>
    </div>
  );
}
