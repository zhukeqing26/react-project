import React, { Component } from "react";
/*
React 并不会真正的绑定事件到每一个具体《》的元素上，而是采用事件代理的模式 
 */
export default class Event extends Component {
  handleClick2() {
    console.log("button2", "不推荐");
  }
  handleClick3 = () => {
    console.log("button3", "比较推荐");
  };
  handleClick4 = () => {
    console.log("button4", "非常推荐,传参");
  };
  render() {
    return (
      <div>
        <input type="text" />
        <button
          onClick={() => {
            console.log("button1", "如果处理逻辑过多，不推荐这种写法");
          }}
        >
          add1
        </button>
        <button onClick={this.handleClick2}>add2</button>
        <button onClick={this.handleClick3}>add3</button>
        <button onClick={() => this.handleClick4()}>add3</button>
      </div>
    );
  }
}
