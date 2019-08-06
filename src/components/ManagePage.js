import React from 'react';
import { Link } from "react-router-dom";
import TVshow from "./TVshow";

class ManagePage extends React.Component {
    
state = {
    allowDelete : true,
        name:"bacon"
};
   

    
    
        handleSubmit = (e) => {
            if(e) e.preventDefault();
            const Movie = [this.title.value, this.rating.value, this.img.value];
            console.log(Movie);
        };

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
       
                <TVshow name={this.state.name} allowDelete={this.state.allowDelete}/>
            
    </div>
    <div className="form">
<form onSubmit = {this.handleSubmit}>
        <h2 className="center">New/Edit Show</h2>
<label for="title">Title</label>
        <input 
        className="center" 
        type="text" 
        placeholder="Title" 
        name="title" 
        ref = {(element) => {this.title = element }}
        required/>
        
<label for="Rating">Rating</label>
        <input  
        className="center" 
        type="text" 
        placeholder="PG, PG-13, R, etc." 
        name="Rating" 
        ref = {(element) => {this.rating = element }}
        required/>

<label for="imgurl">Image URL</label>
        <input 
        className="center" 
        type="text" 
        placeholder="Image URL" 
        name="imgurl" 
        ref = {(element) => {this.img = element }}
        required/>

        <button className="center" type="Submit">Create/Update</button>
        </form>
    </div>
</div>

    </div>
  );
}
}

export default ManagePage;
