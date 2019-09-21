import React from "react";
import { connect } from "react-redux";
import { selectCollectionByParams } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.style.scss";
const Collection = ({ collection }) => {
  const { items, title } = { ...collection };
  return (
    <div className="collection-page">
      <h2 className={title}>{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionByParams(ownProps.match.params.category_id)(state)
});
export default connect(mapStateToProps)(Collection);
