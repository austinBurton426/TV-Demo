import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PreviewPage from './PreviewPage';

class Routing extends React.Component {
constructor(props) {
  super(props);
}
  render() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={this.props.PassManage} />
        <Route path="/Preview" component={PreviewPage} />
      </Switch>
    </Router>
  );
}
}

export default Routing;