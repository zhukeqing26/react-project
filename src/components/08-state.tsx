import React, { Component } from "react";

export default class State extends Component {
  state = {
    collect: false,
    isLinked: false,
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              collect: !this.state.collect,
            });
          }}
        >
          参数是对象——{this.state.collect ? "收藏" : "取消收藏"}
        </button>
        <button
          onClick={() => {
            this.setState(
              (prevState, props) => {
                return {
                  isLinked: !prevState.isLinked,
                };
              },
              () => {
                console.log("回调里的", this.state.isLinked);
              }
            );
            console.log("setState外部的", this.state.isLinked);
          }}
        >
          参数是方法——{this.state.collect ? "收藏" : "取消收藏"}
        </button>
      </div>
    );
  }
}
