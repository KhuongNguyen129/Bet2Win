import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getBetThunk } from "../../store/bets";
import UpdateBet from "../UpdateBets";
import OpenModalButton from "../OpenModalButton";
import DeleteBet from "../DeleteBet";
import "../Bet/Bet.css";

export default function Bet() {
  const { betId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const bet = useSelector((state) => state.bets.allBets[betId]);
  useEffect(() => {
    dispatch(getBetThunk(betId));
  }, [dispatch, betId]);

  if (!bet) {
    return null;
  }

  const redirectToBets = () => {
    history.push("/bets");
  };

  return (
    <>
      <div id="main-container">
        <div className="bet-info-container">
          <div className="first-container">
            <div className="time-container">
              <p className="time1">Time</p>
              <p className="time">{bet.game.time}:00</p>
            </div>
            <div className="team-container">
              <p>Teams</p>
              <div className="team-1-container-all-game">
                <img
                  src={bet.game.team_1.logo}
                  style={{ width: "80px", height: "60px" }}
                />
                <p>{bet.game.team_1.name}</p>
              </div>
              <div className="team-2-container-all-game">
                <img
                  src={bet.game.team_2.logo}
                  style={{ width: "80px", height: "60px" }}
                />
                <p>{bet.game.team_2.name}</p>
              </div>
            </div>

            <div className="spread-container">
              <p className="spread">Spread</p>

              <p className="spread1">{bet.game.spread_1}</p>

              <p className="spread1">{bet.game.spread_2}</p>
            </div>
            <div className="bet-money field1">
              <p>Your Bets</p>
              <p className="input1">$ {bet.spread_1_input}</p>
              <p className="input2">$ {bet.spread_2_input}</p>
            </div>
            <div className="total-info-box">
              <p className="total">Total</p>

              <p className="total-bet">Under {bet.game.total}</p>
              <p className="total-bet">Over {bet.game.total}</p>
            </div>

            <div className="bet-money">
              <p>Your Bets</p>
              <p className="input1">$ {bet.under_input}</p>
              <p className="input2">$ {bet.over_input}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="update-delete-bet-button">
        <button className="all-button" onClick={redirectToBets}>
          Check All Your Bets
        </button>

        <OpenModalButton
          buttonText="Update Bet"
          modalComponent={<UpdateBet betId={betId} />}
        ></OpenModalButton>
        <OpenModalButton
          buttonText="Delete Bet"
          modalComponent={<DeleteBet betId={betId} />}
        ></OpenModalButton>
      </div>
    </>
  );
}
