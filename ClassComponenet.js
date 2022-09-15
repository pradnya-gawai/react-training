import React, { Component } from "react";

class ClassComponenet extends Component {
  constructor() {
    super();
    this.state = { name: "Pradnya" };
  }
  render() {
    return (
      <div>
        <h2>Class Base Component</h2>
        <h2>My Name is {this.state.name}</h2>
      </div>
    );
  }
}

export default ClassComponenet;
