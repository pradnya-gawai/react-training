import React from "react";
import { Link, Outlet } from "react-router-dom";

function NestedRotes(props) {
  return (
    <div>
      <h2>Nested Route </h2>
      <hr />
      <Link to=""> Profile</Link> &nbsp;
      <Link to="membership"> Membership</Link> &nbsp;
      <br />
      <Outlet />
    </div>
  );
}

export default NestedRotes;
