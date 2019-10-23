import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import api from "./middleware/api";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(api));

const store = createStore(reducer, enhancer);

export default store;
