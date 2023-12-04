const GET_ALL_BETS = "games/GET_ALL_BETS";
// const BET = "games/GET_BET";
// const CREATE_BET = "games/CREATE_BET";
// const UPDATE_BET = "games/UPDATE_BET";
// const DELETE_BET = "games/DELETE_BET";

//ACTION
const getAllBets = (bets) => {
  return {
    type: GET_ALL_BETS,
    bets,
  };
};

//THUNK

export const getAllBetsThunk = () => async (dispatch) => {
  const res = await fetch("/api/bets");
  if (res.ok) {
    const bets = await res.json();
    console.log("🚀 >>>>>>>>>> ~ bets from thunk:", bets);
    dispatch(getAllBets(bets));
    return bets;
  } else {
    const err = await res.json();
    return err;
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
        return newState;
      });
    default:
      return state;
  }
};

export default betsReducer;
