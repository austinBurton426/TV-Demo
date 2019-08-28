import React from "react";
import { Link } from "react-router-dom";
import TVshow from "./TVshow";
import Proptypes from "prop-types";

class PreviewPage extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  static propTypes = {
    show: Proptypes.object.isRequired
  };
  
  state = {
    selectedShow : {
      name: this.props.PassShow.name,
      rating:this.props.PassShow.rating,
      img: this.props.PassShow.img
    }
  }


previewShowSelected = e => {
  this.setState({
    name: this.selectedShow.name,
    rating: this.selectedShow.rating,
    img: this.selectedShow.img
  });
};



renderShows = () => {
  return <TVshow
  name = {this.props.PassShow.name}
  selectHandler = {this.showSelected}
  />
};

render() {
return (
    <div>
      <div className="head">
        <Link className="page" to="/">Manage </Link>

        <Link className="page" to="/Preview">Preview </Link>
      </div>
      <div className="flex">
        <div className="shows ">
          <h2>{this.renderShows}</h2>
          <TVshow />
        </div>
        <div>
          <h1>{this.state.selectedShow.name}</h1>
          <h1>{this.state.selectedShow.rating}</h1>
          <img 
      src={this.state.selectedShow.img}
      alt="new"
      />
        </div>
      </div>
    </div>
  );
};
}

export default PreviewPage;
