import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Routing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={this.props.PassManage} />
          <Route path="/Preview" component={this.props.PassPreview} />
        </Switch>
      </Router>
    );
  }
}

export default Routing;
