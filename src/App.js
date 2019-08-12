import React from "react";
import Routing from "./components/Routing";
import './components/App.css';


class App extends React.Component {

  state = {
    allowDelete: true,
//delete the "inProgress" properties (name, rating, img)
    // name: "",
    // title: "",
    // rating: "",
    // img: "",
    show: {
      name: "",
      rating: "",
      img: ""
    }
  };
// copied tvSHowDeleted func & saveTvShow to App.js from Manage 
  tvShowDeleted = e => {
    // e.preventDefault()
    let deleteShows = { name: "", rating: "", img: "" };
    this.setState({ show: deleteShows });
    // this.setState({name:"", rating:"", img:""})
    // console.log("delete");
  };
//bullet 4 complete? 
  saveTVShow = (showToSave) => {
    showToSave.preventDefault();
    let saveShows = {
      name: showToSave.name,
      rating: showToSave.rating,
      img: showToSave.img
    };
    this.setState({ show: saveShows }); // e.preventDefault()
    this.setState({ name: "", rating: "", img: "" });

    // console.log("pushed data into show: object");
  };

render() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}
}

export default App;