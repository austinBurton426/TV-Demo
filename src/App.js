import React from "react";
import Routing from "./components/Routing";
import "./components/App.css";
import ManagePage from "./components/ManagePage";
import PreviewPage from './components/PreviewPage';

class App extends React.Component {
  state = {
    allowDelete: true,
    show: {
      name: "",
      rating: "",
      img: ""
    }
  };
  tvShowDeleted = e => {
    let deleteShows = { name: "", rating: "", img: "" };
    this.setState({ show: deleteShows });
  };
  saveTVShow = showToSave => {
    let saveShows = {
      name: showToSave.name,
      rating: showToSave.rating,
      img: showToSave.img
    };
    this.setState({ show: saveShows });
  };

  renderManagePage = () => {
    return (
      <ManagePage
        PassShow={this.state.show}
        PassDelete={this.tvShowDeleted}
        PassSave={this.saveTVShow}
      />
    );
  };

  renderPreviewPage = () => {
    return <PreviewPage
    PassShow={this.state.show}/>
  }

  render() {
    return (
      <div className="App">
        <Routing 
        PassPreview={this.renderPreviewPage} 
        PassManage={this.renderManagePage} />
      </div>
    );
  }
}

export default App;
