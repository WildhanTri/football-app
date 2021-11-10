import React, { useContext } from "react";

import Home from "./pages/content/home";
import Header from "./shared/header";
import ScrollToTop from "./utils/scrollToTop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const AppRoute = () => {

  return (
    <Router>
      <Header />
      <div style={{ paddingTop: '64px' }}>
        <ScrollToTop />
        <Switch>
          <Route exact path="/"
            render={() => {
              return (
                <Redirect to="/home" />
              )
            }}
          />
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router >
  )
};

export default AppRoute;