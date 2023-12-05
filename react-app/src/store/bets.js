const GET_ALL_BETS = "games/GET_ALL_BETS";
const GET_BET = "games/GET_BET";
const CREATE_BET = "games/CREATE_BET";
const UPDATE_BET = "games/UPDATE_BET";
const DELETE_BET = "games/DELETE_BET";

//ACTION
const getAllBets = (bets) => {
  return {
    type: GET_ALL_BETS,
    bets,
  };
};

const getBet = (bet) => {
  return {
    type: GET_BET,
    bet,
  };
};

const createBet = (newBet) => {
  return {
    type: CREATE_BET,
    newBet,
  };
};

const updateBet = (bet) => {
  return {
    type: UPDATE_BET,
    bet,
  };
};

const deleteBet = (betId) => {
  return {
    type: DELETE_BET,
    betId,
  };
};

//THUNK

export const getAllBetsThunk = () => async (dispatch) => {
  const res = await fetch("/api/bets");
  if (res.ok) {
    const bets = await res.json();
    dispatch(getAllBets(bets));
    return bets;
  } else {
    const err = await res.json();
    return err;
  }
};

export const getBetThunk = (betId) => async (dispatch) => {
  const res = await fetch(`/api/bets/${betId}`);
  if (res.ok) {
    const bet = await res.json();
    dispatch(getBet(bet));
    return bet;
  }
};

export const createBetThunk = (newBet) => async (dispatch) => {
  try {
    const res = await fetch("/api/bets/new", {
      method: "POST",
      body: newBet,
    });

    if (res.ok) {
      const createdNewBet = await res.json();

      dispatch(createBet(createdNewBet.newBet));
      return createdNewBet.newBet;
    } else {
      console.error(`Server error: ${res.status}`);
      return;
    }
  } catch (e) {
    return await e.json();
  }
};

export const updateBetThunk = (formData, betId) => async (dispatch) => {
  const res = await fetch(`/api/bets/${betId}`, {
    method: "PUT",
    body: formData,
  });
  if (res.ok) {
    const bet = await res.json();
    dispatch(updateBet(bet.resUpdateBet));
    return bet.resUpdateBet;
  } else {
    const data = await res.json();
    return data;
  }
};

export const deleteBetThunk = (betId) => async (dispatch) => {
  try {
    const res = await fetch(`/api/bets/${betId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      const bet = await res.json();
      dispatch(deleteBet(betId));
      return bet.error;
    }
  } catch (e) {
    return await e.json();
  }
};

const initialState = {
  allBets: {},
};
const betsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_BETS:
      newState = { ...state, allBets: {} };
      action.bets.forEach((bet) => {
        newState.allBets[bet.id] = bet;
      });
      return newState;
    case GET_BET:
      newState = { ...state, allBets: { ...state.allBets } };
      newState.allBets[action.bet.id] = action.bet;
      return newState;
    case CREATE_BET:
      newState = { ...state, allBets: { ...state.allBets } };
      newState.allBets[action.newBet.id] = action.newBet;
      return newState;
    case UPDATE_BET:
      newState = { ...state, allBets: { ...state.allBets } };
      newState.allBets[action.bet.id] = action.bet;
      return newState;
    case DELETE_BET:
      newState = { ...state, allBets: { ...state.allBets } };
      delete newState.allBets[action.id];
      return newState;
    default:
      return state;
  }
};

export default betsReducer;
