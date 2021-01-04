import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../components/home_page/homepage.jsx";
import ShopPage from "../components/shop/shop.jsx";
import "tachyons";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
