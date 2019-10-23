import request from "superagent";
const baseUrl = "http://localhost:4000";

export const API_LOADING = "@API/LOADING";
export const API_DONE = "@API/DONE";
export const API_ERROR = "@API/ERROR";

const defaults = {
  apiCall: true,
  method: "get",
  path: "/",
  body: null,
  loadingType: API_LOADING,
  errorType: API_ERROR,
  doneType: API_DONE,
  successType: '@API/SUCCESS_NOT_HANDLED',
}

export default store => next => action => {
  if (!action.apiCall) {
    // This is not for me, passing along
    return next(action);
  }

  const requestAction = { ...defaults, ...action};

  const token = store.getState().auth;
  const {method, path, body} = requestAction;

  const auth = token
    ? `Bearer ${token}`
    : undefined;

  store.dispatch({
    type: requestAction.loadingType,
    request: requestAction,
  });

  request[method](`${baseUrl}${path}`)
    .set("Authorization", auth)
    .send(body)
    .then(response => {
      store.dispatch({
        type: requestAction.successType,
        payload: response.body
      });

      store.dispatch({
        type: requestAction.doneType,
        request: requestAction
      });
    })
    .catch(err => {
      console.error(err);

      next({
        type: requestAction.errorType,
        error: err.message,
        request: requestAction,
      });
    });
}
