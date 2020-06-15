import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Saved from "./components/pages/Saved";
import NoMatch from "./components//pages/404";
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
