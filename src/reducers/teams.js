import {
  TEAMS_FETCHED,
  TEAM_CREATE_SUCCESS,
  DELETE_TEAM_SUCCESS
} from "../actions/teams";

export default (state = [], action = {}) => {
  // console.log("STATE", state, "ACTION", action);
  switch (action.type) {
    case TEAMS_FETCHED:
      // console.log("NEW STATE", [...state, ...action.payload]); // try your transformation here
      return [...state, ...action.payload];

    case TEAM_CREATE_SUCCESS:
      return [...state, { ...action.payload }];

    case DELETE_TEAM_SUCCESS:
      // filter out the team that you deleted
      return state.filter(team => team.id !== action.payload);

    default:
      return state;
  }
};
