import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage/hompage.component";
import ShopPage from "./pages/shops/shop.component";

import Header from "./components/header/header.component";
const HatsPage = () => <h1>Hats Page</h1>;
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
