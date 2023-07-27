import React, { Component } from "react";

export default class Ref extends Component {
  myRef = React.createRef();
  render() {
    return (
      <div>
        <input type="text" ref={this.myRef} />
        <button onClick={() => console.log(this.myRef.current)}>按钮</button>
      </div>
    );
  }
}
