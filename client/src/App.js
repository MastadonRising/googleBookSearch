import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/explore", "/"]}>
            <Explore />
          </Route>
          <Route exact path="/myaccount">
            <MyAccount />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
