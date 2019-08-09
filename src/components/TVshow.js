import React from 'react';
import Proptypes from 'prop-types';



class TVshow extends React.Component {
    static propTypes = {
        name: Proptypes.string.isRequired,
        allowDelete: Proptypes.bool,
        selectHandler: Proptypes.func.isRequired,
        deleteHandler: Proptypes.func
    };
    
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