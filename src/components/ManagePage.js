import React from "react";
import { Link } from "react-router-dom";
import TVshow from "./TVshow";
import Proptypes from 'prop-types';


class ManagePage extends React.Component {
  static propTypes = {
show: Proptypes.object.isRequired,
tvShowDeleted : Proptypes.func.isRequired,
saveTVShow : Proptypes.func.isRequired
};
 
  state = {
    allowDelete: true,
//remove "show prop from state"
    name: "",
    title: "",
    rating: "",
    img: "",
    // show: {
    //   name: "",
    //   rating: "",
    //   img: ""
    // }
    //copied State ={..} step 1 paste >> apps.js
  };

  // renderShows = (e) => {
  //   console.log()

  // }
  renderShows = () => (
    <TVshow
      selectHandler={this.tvShowSelected}
      deleteHandler={this.tvShowDeleted}
      // name={this.state.name}
      name={this.props.show.name}
      allowDelete={this.props.allowDelete}
    />
  );

  tvShowSelected = e => {
    // e.preventDefault()
    this.setState({
      name: this.props.show.name,
      rating: this.props.show.rating,
      img: this.props.show.img
    });
    // console.log("select");
  };

  tvShowDeleted = e => {
    // e.preventDefault()
    let deleteShows = { name: "", rating: "", img: "" };
    this.props.showDeleted({ show: deleteShows });
    // this.setState({name:"", rating:"", img:""})
    // console.log("delete");
  };

  saveTVShow = e => {
    e.preventDefault();
    let saveShows = {
      name: this.state.name,
      rating: this.state.rating,
      img: this.state.img
    };
    this.props.saveShow({ show: saveShows });
// called saveshow()
    this.setState({saveShows}); // e.preventDefault()
    this.setState({ name: "", rating: "", img: "" });
//did the thing
    // console.log("pushed data into show: object");
  };

  handleSubmit = e => {
    if (e) e.preventDefault();
    const Movie = [this.name, this.rating, this.img];
    console.log(Movie);
  };

  render() {
    return (
      <div>
        <div className="head">
          <Link className="page" to="/">
            Manage{" "}
          </Link>

          <Link className="page" to="/Preview">
            Preview{" "}
          </Link>
        </div>
        <div className="flex">
          
            <div className="shows">
              <h2>Shows</h2>

              {this.renderShows()}

              {/* {renderShows()} */}
            </div>
            <div className="form">
              <form id="form" onSubmit={this.handleSubmit}>
                <h2 className="center">New/Edit Show</h2>

                <label htmlFor="name">Title</label>

                <input
                  value={this.state.name}
                  onChange={event =>
                    this.setState({ name: event.target.value })
                  }
                  className="center"
                  type="text"
                  placeholder="Name"
                  name="name"
                  ref={element => {
                    this.title = element;
                  }}
                  required
                />

                <label htmlFor="Rating">Rating</label>

                <input
                  value={this.state.rating}
                  onChange={event =>
                    this.setState({ rating: event.target.value })
                  }
                  className="center"
                  type="text"
                  placeholder="PG, PG-13, R, etc."
                  name="Rating"
                  ref={element => {
                    this.rating = element;
                  }}
                  required
                />

                <label htmlFor="img">Image URL</label>

                <input
                  value={this.state.img}
                  onChange={event => this.setState({ img: event.target.value })}
                  className="center"
                  type="text"
                  placeholder="Image URL"
                  name="img"
                  ref={element => {
                    this.img = element;
                  }}
                  required
                />

                <button
                  onClick={this.saveTVShow}
                  className="center"
                  type="Submit"
                >
                  Create/Update
                </button>
              </form>
            </div>
          
        </div>
      </div>
    );
  }
}

export default ManagePage;
