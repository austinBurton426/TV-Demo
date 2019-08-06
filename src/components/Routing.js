import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ManagePage from './ManagePage';
import PreviewPage from './PreviewPage';

function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ManagePage} />
        <Route path="/Preview" component={PreviewPage} />
      </Switch>
    </Router>
  );
}

export default Routing;