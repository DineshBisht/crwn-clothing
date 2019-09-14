import CartActionTypes from "./cart.action.types";
import { addItemToCart } from "./cart.utils";
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case CartActionTypes.ADD_CART_ITEMS:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payLoad)
      };
    default:
      return state;
  }
};

export default cartReducer;