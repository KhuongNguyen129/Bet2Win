import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getGameThunk } from "../../store/games";
import UpdateGame from "../UpdateGames";
import OpenModalButton from "../OpenModalButton/index";
import DeleteButton from "../DeleteGame";

export default function Game() {
  const { gameId } = useParams();
  //   console.log("🚀 >>>>>>>>>> ~ gameId:", gameId);
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const game = useSelector((state) => state.games.allGames[gameId]);
  console.log("🚀 >>>>>>>>>> ~ game:", game);
  //   const userId = sessionUser?.id;

  useEffect(() => {
    dispatch(getGameThunk(gameId));
  }, [dispatch, gameId]);

  const handleGameUpdate = () => {
    history.push(`/games/${gameId}/update`);
  };

  if (!game) {
    return null;
  }

  return (
    <div>
      <p>{game.spread_1}</p>
      <OpenModalButton
        buttonText="Upload Game"
        modalComponent={<UpdateGame gameId={gameId} />}
      ></OpenModalButton>
      <OpenModalButton
        buttonText="Delete Game"
        modalComponent={<DeleteButton gameId={gameId} />}
      ></OpenModalButton>
    </div>
  );
}
