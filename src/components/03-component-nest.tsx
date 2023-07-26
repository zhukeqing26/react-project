import React, { Component } from "react";

class Nav extends Component {
  render() {
    return <div>Nav</div>;
  }
}

function Banner() {
  return <div>Banner</div>;
}

const Footer = () => <div>Footer</div>;

export default class ComponentNest extends Component {
  render() {
    return (
      <>
        <Nav></Nav>
        <Banner></Banner>
        <Footer></Footer>
      </>
    );
  }
}
