import React from "react";
import { Link } from "react-router-dom";
import TVshow from "./TVshow";

class ManagePage extends React.Component {
  state = {
    allowDelete: true,

    name: "",
    title: "",
    rating: "",
    img: "",
    show: {
      name: "",
      rating: "",
      img: ""
    }
  };

  // renderShows = (e) => {
  //   console.log()

  // }
  renderShows = () => (
    <TVshow
      selectHandler={this.tvShowSelected}
      deleteHandler={this.tvShowDeleted}
      // name={this.state.name}
      name={this.state.show.name}
      allowDelete={this.state.allowDelete}
    />
  );

  tvShowSelected = e => {
    // e.preventDefault()
    this.setState({
      name: this.state.show.name,
      rating: this.state.show.rating,
      img: this.state.show.img
    });
    // console.log("select");
  };

  tvShowDeleted = e => {
    // e.preventDefault()
    let deleteShows = { name: "", rating: "", img: "" };
    this.setState({ show: deleteShows });
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
    this.setState({ show: saveShows }); // e.preventDefault()
    this.setState({ name: "", rating: "", img: "" });

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
