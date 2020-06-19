import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import hello from "./";
import Home from "./pages/home";
import Saved from "./pages/saved";
import NoMatch from "./pages/error";

import "./index.css";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/home", "/"]}>
            <Home />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
