import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGamesThunk } from "../../store/games";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./AllGames.css";
export default function AllGames() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.allGames);
  const allGames = Object.values(games);
  // const sessionUser = useSelector((state) => state.session.user);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllGamesThunk(currentPage, 10));
  }, [dispatch, currentPage]);

  const pageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <h1 id="h1-all-games">All Games</h1>
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
      <div className="pagination">
        <button
          onClick={() => pageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {allGames.length >= 10 && (
          <>
            <span>{currentPage}</span>
            <button
              onClick={() => pageChange(currentPage + 1)}
              disabled={allGames.length < 10}
            >
              Next
            </button>
          </>
        )}
      </div>
    </>
  );
}
