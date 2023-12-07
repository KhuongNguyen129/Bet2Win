import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllBetsThunk } from "../../store/bets";
import "../AllBets/AllBets.css";

export default function AllBets() {
  const dispatch = useDispatch();
  const bets = useSelector((state) => state.bets.allBets);
  console.log("🚀 >>>>>>>>>> ~ bets:", bets);
  const sessionUser = useSelector((state) => state.session.user);
  const allBets = Object.values(bets).filter(
    (bet) => bet.user_id === sessionUser.id
  );
  console.log("🚀 >>>>>>>>>> ~ allBets:", allBets);

  useEffect(() => {
    dispatch(getAllBetsThunk());
  }, [dispatch]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          margin: "50px 100px",
        }}
      >
        {allBets &&
          allBets.map((bet) => (
            <div>
              <NavLink key={bet.id} to={`/bets/${bet.id}`}>
                <div id="main-container">
                  <div className="game-info-container">
                    <div className="first-container">
                      <div className="time-container">
                        <p className="time1">Time</p>
                        <p className="time">{bet.game.time}:00</p>
                      </div>
                      <div className="team-container set-width">
                        <p>Teams</p>
                        <div className="team-1-container">
                          <p>{bet.game.team_1.name}</p>
                        </div>
                        <div className="team-2-container">
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
              </NavLink>
            </div>
          ))}
      </div>
    </>
  );
}
