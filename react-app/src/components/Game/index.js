import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getGameThunk } from "../../store/games";

export default function Game() {
  const { gameId } = useParams;
  console.log("🚀 >>>>>>>>>> ~ gameId:", gameId);
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const game = useSelector((state) => state.games.allGames[gameId]);
  const userId = sessionUser?.id;

  useEffect(() => {
    dispatch(getGameThunk(gameId));
  }, [dispatch, gameId]);

  if (!game) {
    return null;
  }

  return (
    <>
      <h1>Hello game </h1>
    </>
  );
}
