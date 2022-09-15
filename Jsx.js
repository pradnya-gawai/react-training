import React from "react";

function Jsx(props) {
  let num = 5;
  function checkNumber(n) {
    if (n % 2 === 0) return <div>{n} is even number</div>;
    else return <div>{n} is odd number</div>;
  }
  const employess = [
    { name: "Mohan", salary: 10000, address: "Noida" },
    { name: "Ankit", salary: 12000, address: "Delhi" },
    { name: "Raman", salary: 14000, address: "Pune" },
  ];

  return (
    <div>
      <h1>Jsx</h1>
      {checkNumber(8)}
      {((n) => {
        if (n % 2 === 0) return <div>{n} is even number</div>;
        else return <div>{n} is odd number</div>;
      })(num)}
      <h4>Logical And</h4>
      {num % 2 === 0 && <div> {num} is even number</div>}
      {num % 2 !== 0 && <div>{num} odd number</div>}

      <h4>Ternary operator</h4>
      {num % 2 === 0 ? (
        <div>{num}even number</div>
      ) : (
        <div>{num} odd number</div>
      )}
      <h4>Switch</h4>
      {((color) => {
        switch (color) {
          case "red":
            return <div>This is Red Color</div>;
            break;
          case "blue":
            return <div>This is Blue Color</div>;
          default:
            return <div>No Color passed</div>;
            break;
        }
      })("red")}

      <h4>looping map</h4>
      <ul>
        {employess.map((item, index) => {
          return (
            <li key={index}>
              {" "}
              {item.name},{item.salary},{item.address}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Jsx;
