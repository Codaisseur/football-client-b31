export const TEAMS_FETCHED = "TEAMS_FETCHED";
export const TEAM_CREATE_SUCCESS = "TEAM_CREATE_SUCCESS";
export const FETCH_TEAM_SUCCESS = "FETCH_TEAM_SUCCESS";
export const DELETE_TEAM_SUCCESS = "DELETE_TEAM_SUCCESS";

export const loadTeams = () => ({
  apiCall: true,
  path: "/teams",
  successType: TEAMS_FETCHED
});

export const createTeam = data => ({
  apiCall: true,
  method: "post",
  path: "/teams",
  body: data,
  successType: TEAM_CREATE_SUCCESS
});

export const loadTeam = id => ({
  apiCall: true,
  path: `/teams/${id}`,
  successType: FETCH_TEAM_SUCCESS
});

export const deleteTeam = id => ({
  apiCall: true,
  method: 'delete',
  path: `/teams/${id}`,
  successType: DELETE_TEAM_SUCCESS
});
