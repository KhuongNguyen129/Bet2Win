import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGamesThunk } from "../../store/games";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function AllGames() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.allGames);
  const allGames = Object.values(games);
  console.log("🚀 >>>>>>>>>> ~ allGames:", allGames);
  const sessionUser = useSelector((state) => state.session.user);
  console.log("🚀 >>>>>>>>>> ~ games:", games);

  useEffect(() => {
    dispatch(getAllGamesThunk());
  }, [dispatch]);

  return (
    <>
      {allGames.map((game) => (
        <NavLink id="allgames" key={game.id} to={`/games/${game.id}`}>
          <div>
            <p>{game.owner_id}</p>
            <p>{game.team_1.initial}</p>
            <img src={game.team_1.logo} />
            <p>time</p>
            <p>{game.team_2.initial}</p>
            <img src={game.team_2.logo} />
          </div>
        </NavLink>
      ))}
    </>
  );
}
