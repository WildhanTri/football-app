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
import Competition from "./pages/content/competitions";
import Teams from "./pages/content/teams";
import Player from "./pages/content/players";
import AppBreadcrumb from "./shared/AppBreadcrumb";

const AppRoute = () => {

  return (
    <Router>
      <Header />
      <div style={{ paddingTop: '64px', paddingBottom: '64px' }}>

        <AppBreadcrumb />
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
          <Route exact path="/home/:areaId/competitions">
            <Competition />
          </Route>
          <Route exact path="/home/:areaId/competitions/:competitionId/teams">
            <Teams />
          </Route>
          <Route exact path="/home/:areaId/competitions/:competitionId/teams/:teamId/players">
            <Player />
          </Route>
        </Switch>
      </div>
    </Router >
  )
};

export default AppRoute;