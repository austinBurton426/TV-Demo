import React from 'react';



class TVshow extends React.Component {
    // constructor(props) {
    //     super(props);
    //   }


renderDelete() {
    if (this.props.allowDelete===true) {
        return (<div>
            <button>Butoon</button>
            </div>
        )
    }
}

    render() {
  return (
   <div>
       <button>{this.props.name}</button>
       {this.renderDelete()}
   </div>
  );
}
}
export default TVshow;