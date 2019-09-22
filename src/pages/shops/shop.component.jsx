import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route path={`${match.path}`} component={CollectionOverview} />
  </div>
);

export default ShopPage;
