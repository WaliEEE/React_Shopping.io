import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../components/home_page/homepage.jsx";
import ShopPage from "../components/shop/shop.jsx";
import Header from "../components/header/header.jsx";
import Sign from "../components/sign_form/sign.jsx";
import "tachyons";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sign" component={Sign} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
