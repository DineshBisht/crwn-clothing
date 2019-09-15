import CartActionTypes from "./cart.action.types";
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addCartItems = cartItems => ({
  type: CartActionTypes.ADD_CART_ITEMS,
  payLoad: cartItems
});

export const removeItemFromCart = cartItems => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payLoad: cartItems
});
