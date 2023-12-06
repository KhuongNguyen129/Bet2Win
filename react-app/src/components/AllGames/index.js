import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGamesThunk } from "../../store/games";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./AllGames.css";
export default function AllGames() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.allGames);
  const allGames = Object.values(games);
  console.log("🚀 >>>>>>>>>> ~ allGames:", allGames);
  const sessionUser = useSelector((state) => state.session.user);
  console.log("🚀 >>>>>>>>>> ~ sessionUser:", sessionUser);
  console.log("🚀 >>>>>>>>>> ~ games:", games);

  useEffect(() => {
    dispatch(getAllGamesThunk());
  }, [dispatch]);

  return (
    <>
      <div className="all-games">
        {allGames.map((game) => (
          <div id="game-container">
            <NavLink key={game.id} to={`/games/${game.id}`}>
              <p className="user-name">{game.user.username}</p>
              <div className="game">
                <div className="team1">
                  <div className="team-logo">
                    <img
                      src={game.team_1.logo}
                      style={{ width: "70px", height: "50px" }}
                    />
                  </div>
                  <p>{game.team_1.initial}</p>
                </div>
                <p className="all-games-time">{game.time}:00 PST</p>
                <div className="team2">
                  <div className="team-logo">
                    <img
                      src={game.team_2.logo}
                      style={{ width: "70px", height: "50px" }}
                    />
                  </div>
                  <p>{game.team_2.initial}</p>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
}
