// import React, { useState } from "react";

// function DataBinding(props) {
//   const [data, setData] = useState({
//     company: "Dot Net Tricks",
//     name: "mohan",
//   });
//   const handleParams = (params) => {
//     alert(`Params: ${params}`);
//   };

//   const handleChange = (event) => {
//     let value = event.target.value;
//     const obj = Object.create(data);
//     obj.name = value;
//     setData(obj);
//   };
//   const handleGreet = () => {
//     alert(`Welcome ${data.name}`);
//   };

//   return (
//     <div>
//       <h2>Data binding</h2>
//       <div> simple binding : {data.company}</div>
//       <div>
//         <input type="text" value={data.name} onChange={handleChange} /> name:{" "}
//         {data.name}
//       </div>
//       <h2>Event Handling</h2>
//       <div>
//         <button type="button" onClick={handleGreet}>
//           {" "}
//           Greet Button
//         </button>
//         <button onClick={() => handleParams("Mohan")}>Click Params</button>
//       </div>
//     </div>
//   );
// }

// export default DataBinding;

// class Base Component
import React, { Component } from "react";

export default class DataBinding extends Component {
  constructor() {
    super();
    this.state = {
      company: "DotNetTricks",
      name: "Mohan",
    };
    //  bind this handle change if using named function
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let value = event.target.value;
    this.setState({ name: value });
  }

  // handleChange = (event) => {
  //     let value = event.target.value;
  //     this.setState({ name: value });
  // }
  handleGreet = (event) => {
    alert(`greet :${this.state.name}`);
  };
  handleParams = (params) => {
    alert(`params :${params}`);
  };
  render() {
    return (
      <div>
        <h2>DataBinding</h2>
        <div>Simple Binding: {this.state.company}</div>
        <h2>Two Way Data Binding</h2>
        <div>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />{" "}
          : {this.state.name}
        </div>
        <h2>Event handling</h2>
        <div>
          <button onClick={this.handleGreet}>Greet!</button>
          <button onClick={() => this.handleParams("Mohan")}>
            Click Params
          </button>
        </div>
      </div>
    );
  }
}
