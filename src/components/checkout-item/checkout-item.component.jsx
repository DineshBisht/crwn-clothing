import React from "react";
import { connect } from "react-redux";
import "./checkout-item.style.scss";

import {
  removeItemFromCart,
  removeQuantity,
  addCartItems
} from "../../redux/cart/cart.action";
const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="Item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(removeItemFromCart(item)),
  removeItem: item => dispatch(removeQuantity(item)),
  addItem: item => dispatch(addCartItems(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
