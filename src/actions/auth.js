export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = (email, password) => ({
  apiCall: true,
  method: "post",
  path: "/login",
  body: { email, password },
  successType: LOGIN_SUCCESS
});
