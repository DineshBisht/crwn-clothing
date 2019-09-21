import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import logger from "redux-logger";
import rootReducers from "./root-reducers";

const middleWare = [logger];

export const store = createStore(rootReducers, applyMiddleware(...middleWare));
export const persistor = persistStore(store);
export default { store, persistor };
