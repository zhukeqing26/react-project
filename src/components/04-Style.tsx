import React, { Component } from "react";
import "./less/index.less";
export default class Style extends Component {
  render() {
    const obj = {
      background: "red",
    };
    return (
      <div className="box">
        {10 + 20}
        <div className="aaa">7878</div>
        <div style={{ fontSize: "60px" }}>7888</div>
        <div style={obj}>7888</div>
        <div>
          <label htmlFor="name">姓名</label>
          <input type="text" id="name" />
        </div>
      </div>
    );
  }
}
