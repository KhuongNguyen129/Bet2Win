import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getBetThunk } from "../../store/bets";
import UpdateBet from "../UpdateBets";
import OpenModalButton from "../OpenModalButton";
import DeleteBet from "../DeleteBet";

export default function Bet() {
  const { betId } = useParams();
  const dispatch = useDispatch();
  // const history = useHistory();
  // const sessionUser = useSelector((state) => state.session.user);
  const bet = useSelector((state) => state.bets.allBets[betId]);

  //   const userId = sessionUser?.id;

  useEffect(() => {
    dispatch(getBetThunk(betId));
  }, [dispatch, betId]);

  // const handleGameUpdate = () => {
  //   history.push(`/games/${gameId}/update`);
  // };

  if (!bet) {
    return null;
  }

  return (
    <>
      <div>
        <p>{bet.game.team_1.name}</p>
        <p>{bet.game.spread_1}</p>

        <p>{bet.spread_1_input}$</p>

        <p>{bet.game.team_2.name}</p>
        <p>{bet.game.spread_2}</p>

        <p>{bet.spread_2_input}$</p>

        <p>{bet.game.total}</p>
        <p>{bet.game.under_input}</p>
        <p>{bet.game.over_input}</p>
      </div>
      <OpenModalButton
        buttonText="Update Bet"
        modalComponent={<UpdateBet betId={betId} />}
      ></OpenModalButton>
      <OpenModalButton
        buttonText="Delete Bet"
        modalComponent={<DeleteBet betId={betId} />}
      ></OpenModalButton>
    </>
  );
}
