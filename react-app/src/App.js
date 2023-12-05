import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Hompage from "./components/HomePage";
import AllGames from "./components/AllGames";
import CreateNewGame from "./components/CreateGame";
import Game from "./components/Game";
import UpdateGame from "./components/UpdateGames";
import AllBets from "./components/AllBets";
import Bet from "./components/Bet";
import CreateNewBet from "./components/CreateBet";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const isHomePage = location.pathname === "/";

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Hompage />
        </Route>
      </Switch>

      {!isHomePage && <Navigation isLoaded={isLoaded} />}
      {isLoaded && (
        <Switch>
          <Route exact path="/games">
            <AllGames />
          </Route>
          <Route path="/games/new">
            <CreateNewGame />
          </Route>
          <Route path="/games/:gameId">
            <Game />
          </Route>
          <Route path="/games/:gameId/update">
            <UpdateGame />
          </Route>
          <Route exact path="/bets">
            <AllBets />
          </Route>
          <Route path="/bets/new">
            <CreateNewBet />
          </Route>
          <Route path="/bets/:betId">
            <Bet />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
