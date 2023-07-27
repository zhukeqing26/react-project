import React, { Component } from "react";

export default class Loop extends Component {
  state = {
    list: ["111", "222", "333"],
  };
  render() {
    const newList = this.state.list.map((item: string, index: number) => (
      <li key={index}>{item}</li>
    ));
    return <ul>{newList}</ul>;
  }
}
