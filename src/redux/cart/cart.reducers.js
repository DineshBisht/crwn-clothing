import CartActionTypes from "./cart.action.types";
import { addItemToCart, removeQty } from "./cart.utils";
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

    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payLoad.id
        )
      };

    case CartActionTypes.DECREASE_ITEM_QTY:
      return {
        ...state,
        cartItems: removeQty(state.cartItems, action.payLoad)
      };
    default:
      return state;
  }
};

export default cartReducer;
