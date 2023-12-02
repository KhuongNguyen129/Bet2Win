import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGamesThunk } from "../../store/games";

export default function AllGames({ isLoaded }) {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.allGames);
  const sessionUser = useSelector((state) => state.session.user);
  console.log("🚀 >>>>>>>>>> ~ games:", games);

  useEffect(() => {
    dispatch(getAllGamesThunk());
  }, [dispatch]);

  return (
    <>
      <h1>AllGames</h1>
    </>
  );
}
