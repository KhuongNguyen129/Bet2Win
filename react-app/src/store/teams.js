const GET_ALL_TEAMS = "games/GET_ALL_TEAMS";

const getAllTeams = (teams) => {
  return {
    type: GET_ALL_TEAMS,
    teams,
  };
};

export const getAllTeamsThunk = () => async (dispatch) => {
  const res = await fetch("/api/teams/");
  if (res.ok) {
    const teams = await res.json();
    dispatch(getAllTeams(teams));
    return teams;
  } else {
    const errors = await res.json();
    return errors;
  }
};

const initialState = {
  allTeams: {},
};

const teamsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_TEAMS:
      newState = { ...state, allTeams: {} };
      action.teams.forEach((team) => {
        newState.allTeams[team.id] = team;
      });
      return newState;

    default:
      return state;
  }
};

export default teamsReducer;
