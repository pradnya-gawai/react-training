import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Lifecycle extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      users: [],
    };
    const Leave = (event) => {
      if (window.confirm("Are you sure you want to leave")) return true;
      event.preventDefault();
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data });
      });
    window.addEventListener(" beforeunload", this.Leave);
  }
  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate");
    if (this.state.users.length !== newState.users.length) return true;
    else return false;
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    window.removeEventListener("beforeunload", this.Leave);
  }
  render() {
    return (
      <div>
        <h2>Lifecycle</h2>
        <h4>Users</h4>
        <ul>
          {this.state.users.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
        <p>
          <Link to="/" onClick={this.Leave}>
            Leave Page
          </Link>
        </p>
      </div>
    );
  }
}
