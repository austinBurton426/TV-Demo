import React from 'react';



class TVshow extends React.Component {

renderDelete() {
    if (this.props.allowDelete===true) {
        return (<div>
            <button type="radio" className="delete" onClick={this.props.deleteHandler}>-</button>
            </div>
        )
    }
}

    render() {
  return (
   <div className="showshow">
       <button  onClick={this.props.selectHandler}>{this.props.name}</button>
       {this.renderDelete()}
   </div>
  );
}
}
export default TVshow;