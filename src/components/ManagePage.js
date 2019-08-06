import React from 'react';
import { Link } from "react-router-dom";
import TVshow from "./TVshow";

class ManagePage extends React.Component {
    
state = {
    allowDelete : true,
        name:"bacon"
}
   
tvShowSelected = (e) => {
    // e.preventDefault()
    console.log("select")
}

tvShowDeleted = (e) => {
    // e.preventDefault()
    console.log("delete")
}

saveTVShow = (e) => {
    // e.preventDefault()
    console.log('save')
}
    
    
        handleSubmit = (e) => {
            if(e) e.preventDefault();
            const Movie = [this.title.value, this.rating.value, this.img.value]
            console.log(Movie)
        }

render() {
  return (
    <div>
        CONTENT
        <div>
        <Link to="/">
          Manage{" "}
        </Link>

        <Link to="/Preview">
          Preview{" "}
        </Link>
      </div>

      <div id="block">
<div className="shows">
        <h2>Shows</h2>
       
                <TVshow  selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} name={this.state.name} allowDelete={this.state.allowDelete}/>
            
    </div>
    <div className="form">
<form onSubmit = {this.handleSubmit}>
        <h2 className="center">New/Edit Show</h2>
<label htmlFor="title">Title</label>
        <input 
        className="center" 
        type="text" 
        placeholder="Title" 
        name="title" 
        ref = {(element) => {this.title = element }}
        required/>
        
<label htmlFor="Rating">Rating</label>
        <input  
        className="center" 
        type="text" 
        placeholder="PG, PG-13, R, etc." 
        name="Rating" 
        ref = {(element) => {this.rating = element }}
        required/>

<label htmlFor="imgurl">Image URL</label>
        <input 
        className="center" 
        type="text" 
        placeholder="Image URL" 
        name="imgurl" 
        ref = {(element) => {this.img = element }}
        required/>

        <button onClick={this.saveTVShow} className="center" type="Submit">Create/Update</button>
        </form>
    </div>
</div>

    </div>
  );
}
}

export default ManagePage;
