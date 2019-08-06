import React from 'react';



class TVshow extends React.Component {
    // constructor(props) {
    //     super(props);
    //   }

    // handleOnClick()

renderDelete() {
    if (this.props.allowDelete===true) {
        return (<div>
            <button  onClick={this.props.deleteHandler}>Butoon</button>
            </div>
        )
    }
}

    render() {
  return (
   <div>
       <button  onClick={this.props.selectHandler}>{this.props.name}</button>
       {this.renderDelete()}
   </div>
  );
}
}
export default TVshow;