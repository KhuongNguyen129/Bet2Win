import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllBetsThunk } from "../../store/bets";

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
      <div>
        {allBets &&
          allBets.map((bet) => (
            <div>
              <NavLink key={bet.id} to={`/bets/${bet.id}`}>
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
              </NavLink>
            </div>
          ))}
      </div>
    </>
  );
}
