import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/shop/shop.selectors";
import "./collection-overview.style.scss";
const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollection
});
export default connect(mapStateToProps)(CollectionOverview);
