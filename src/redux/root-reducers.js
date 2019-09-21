import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducers";
import directoryReducers from "./directory/directory.reducers";
import shopReducers from "./shop/shop.reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persisterConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducers,
  shop: shopReducers
});

export default persistReducer(persisterConfig, rootReducers);
