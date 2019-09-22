import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";
import "./checkout.style.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckout from "../../components/stripe-button/stripe-button.component";

const Checkout = ({ cartItems, totalAmount }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      TOTAL: ${totalAmount}
      <div className="test-warning">
        * Please use the following test credit card for payments *
        <br />
        4242 4242 4242 4242 - expiry: 01/20 - CVV: 123
      </div>
      <StripeCheckout price={totalAmount} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalAmount: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
