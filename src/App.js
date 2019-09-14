import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/hompage.component";
import ShopPage from "./pages/shops/shop.component";
import SignAndSignUpPage from "./pages/sign-in-and-signup/sign-in-and-signup.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component {
  unsubsribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          const newUser = { id: snapShot.id, ...snapShot.data() };
          setCurrentUser(newUser);
          //console.log("##########", newUser);
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispath => ({
  setCurrentUser: user => dispath(setCurrentUser(user))
});

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
