
export const PLAYER_CREATE_SUCCESS = "PLAYER_CREATE_SUCCESS";

export const createPlayer = data => ({
  apiCall: true,
  method: "post",
  path: "/players",
  body: data,
  successType: PLAYER_CREATE_SUCCESS
});
