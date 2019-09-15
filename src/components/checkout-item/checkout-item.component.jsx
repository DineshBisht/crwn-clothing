import React from "react";
import { connect } from "react-redux";
import "./checkout-item.style.scss";

import { removeItemFromCart } from "../../redux/cart/cart.action";
const CheckoutItem = ({ cartItem, clearItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="Item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(removeItemFromCart(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);