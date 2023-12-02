const GET_ALL_GAMES = "games/GET_ALL_GAMES";

// ACTION
const getAllGames = (games) => {
  return {
    type: GET_ALL_GAMES,
    games,
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
    default:
      return state;
  }
};

export default gamesReducer;
