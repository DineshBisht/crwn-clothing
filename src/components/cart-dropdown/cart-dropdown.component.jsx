import React from "react";
import "./cart-dropdown.style.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

import CustomButton from "../custom-button/custom-button.component";
const CartComponent = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});
export default connect(mapStateToProps)(CartComponent);
