import React from "react";
import { connect } from "react-redux";
import "./collection-item.style.scss";
import CustomButton from "../custom-button/custom-button.component";

import { addCartItems } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addCartItems }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addCartItems(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addCartItems: item => dispatch(addCartItems(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
