const GET_ALL_GAMES = "games/GET_ALL_GAMES";
const GET_GAME = "games/GET_GAME";
const CREATE_GAME = "games/CREATE_GAME";
const UPDATE_GAME = "games/UPDATE_GAME";
const DELETE_GAME = "games/DELETE_GAME";

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
    type: CREATE_GAME,
    newGame,
  };
};

const updateGame = (game) => {
  return {
    type: UPDATE_GAME,
    game,
  };
};

const deleteGame = (gameId) => {
  return {
    type: DELETE_GAME,
    gameId,
  };
};

// THUNK
export const getAllGamesThunk =
  (page = 1, pageSize = 9) =>
  async (dispatch) => {
    const res = await fetch(`/api/games/?page=${page}&page_size=${pageSize}`);
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

export const createGameThunk = (newGames) => async (dispatch) => {
  try {
    const res = await fetch("/api/games/new", {
      method: "POST",
      body: newGames,
    });

    if (res.ok) {
      const createdNewGame = await res.json();

      dispatch(createGame(createdNewGame.newGame));
      return createdNewGame.newGame;
    } else {
      console.error(`Server error: ${res.status}`);
      return;
    }
  } catch (e) {
    return await e.json();
  }
};

export const updateGameThunk = (formData, gameId) => async (dispatch) => {
  const res = await fetch(`/api/games/${gameId}`, {
    method: "PUT",
    body: formData,
  });
  if (res.ok) {
    const game = await res.json();
    dispatch(updateGame(game.resUpdateGame));
    return game.resUpdateGame;
  } else {
    const data = await res.json();
    return data;
  }
};

export const deleteGameThunk = (gameId) => async (dispatch) => {
  try {
    const res = await fetch(`/api/games/${gameId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      const game = await res.json();
      dispatch(deleteGame(gameId));
      return game.error;
    }
  } catch (e) {
    return await e.json();
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
      return newState;
    case CREATE_GAME:
      newState = { ...state, allGames: { ...state.allGames } };
      newState.allGames[action.newGame.id] = action.newGame;
      return newState;
    case UPDATE_GAME:
      newState = { ...state, allGames: { ...state.allGames } };
      newState.allGames[action.game.id] = action.game;
      return newState;
    case DELETE_GAME:
      newState = { ...state, allGames: { ...state.allGames } };
      delete newState.allGames[action.id];
      return newState;
    default:
      return state;
  }
};

export default gamesReducer;
