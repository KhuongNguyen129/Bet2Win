const GET_ALL_GAMES = "games/GET_ALL_GAMES";
const GET_GAME = "games/GET_GAME";
const CREAT_GAME = "games/CREATE_GAME";

// ACTION
const getAllGames = (games) => {
  return {
    type: GET_ALL_GAMES,
    games,
  };
};

const getGame = (game) => {
  return {
    type: GET_GAME,
    game,
  };
};

const createGame = (newGame) => {
  return {
    type: CREAT_GAME,
    newGame,
  };
};

// THUNK
export const getAllGamesThunk = () => async (dispatch) => {
  const res = await fetch("/api/games/");
  if (res.ok) {
    const games = await res.json();
    dispatch(getAllGames(games));
    return games;
  } else {
    const errors = await res.json();
    return errors;
  }
};
export const getGameThunk = (gameId) => async (dispatch) => {
  const res = await fetch(`/api/games/${gameId}`);
  if (res.ok) {
    const game = await res.json();
    dispatch(getGame(game));
    return game;
  }
};

export const createGameThunk = (newGame) => async (dispatch) => {
  try {
    const res = await fetch("/api/games/new", {
      method: "POST",
      body: newGame,
    });

    if (res.ok) {
      const createdNewGame = await res.json();

      dispatch(createGame(createdNewGame));
      return createdNewGame;
    } else {
      console.log("There is an error creating a new Game");
      return;
    }
  } catch (error) {
    console.error("Error creating a new Game:", error);
  }
};

// INITIAL STATE
const initialState = {
  allGames: {},
};

// REDUCER
const gamesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_GAMES:
      newState = { ...state, allGames: {} };
      action.games.forEach((game) => {
        newState.allGames[game.id] = game;
      });
      return newState;
    case GET_GAME:
      newState = { ...state, allGames: { ...state.allGames } };
      newState.allGames[action.game.id] = action.game;
    case CREAT_GAME:
      newState = { ...state, allGames: { ...state.allGames } };
      newState.allGames[action.newGame.id] = action.newGame;
    default:
      return state;
  }
};

export default gamesReducer;
