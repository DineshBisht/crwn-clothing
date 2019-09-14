import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducers from "./root-reducers";

const middleWare = [logger];

const store = createStore(rootReducers, applyMiddleware(...middleWare));

export default store;
