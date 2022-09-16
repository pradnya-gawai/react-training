import React, { Component } from "react";

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      company: "Mewurk",
    };
  }
  render() {
    return (
      <div>
        <h2>Parent</h2>
        <p>Company :{this.state.company}</p>
      </div>
    );
  }
}

class Child extends Parent {
  constructor() {
    super();
    // this.state = {
    //   name: "pradnya",
    // };
  }
  render() {
    return (
      <div>
        {super.render()}
        <h2>Child</h2>
        <p>
          State : {this.state.company},{this.state.name}
        </p>
      </div>
    );
  }
}

export default Child;
