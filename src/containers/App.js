import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../components/home_page/homepage.jsx";
import ShopPage from "../components/shop/shop.jsx";
import Header from "../components/header/header.jsx";
import Sign from "../components/sign_form/sign.jsx";
import { auth } from "../firebase/firebase.utils";
import "tachyons";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/sign" component={Sign} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
