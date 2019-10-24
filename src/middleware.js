import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actions/auth";

export const storeJwt = store => next => action => {
  try {
    if (action.type === LOGIN_SUCCESS) {
      localStorage.setItem("jwt", action.payload);
    }
    if (action.type === LOGOUT_SUCCESS) {
      localStorage.removeItem("jwt");
    }
  } catch (e) {
    console.log(`Interaction with LocalStorage went wrong`, e);
  }

  next(action);
};

export const socketIo = socketio => store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    const jwt = action.payload;
    socketio.connect(store.dispatch, jwt);
  }
  if (action.type === LOGOUT_SUCCESS) {
    socketio.disconnect();
  }

  next(action);
};
