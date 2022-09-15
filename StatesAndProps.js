import React, { Component } from "react";

class StatesAndProps extends Component {
  constructor() {
    super();
    this.state = { title: "react -book", author: "Pradnya" };
  }
  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <Books bookAuthor={this.state.author}></Books>
      </div>
    );
  }
}

export default StatesAndProps;

function Books(props) {
  return <div>Book Author {props.bookAuthor}</div>;
}
