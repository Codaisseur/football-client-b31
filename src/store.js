import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import ReduxThunk from "redux-thunk";
import { storeJwt, socketIo } from "./middleware";
import SocketIO from "./socketio";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const socket = new SocketIO();

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk, storeJwt, socketIo(socket))
);

const store = createStore(reducer, enhancer);

// when JWT was coming from localStorage, connect via websockets
const currentToken = store.getState().auth
if (currentToken) {
  socket.connect(store.dispatch, currentToken)
}

export default store;
