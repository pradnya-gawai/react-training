import React from "react";

const Input = (props) => {
  const type = props.type ? props.type : "text";
  return <input type={type} name={props.name} className={props.className} />;
};

const InputButton = (props) => {
  return (
    <button type="button" name={props.name} className={props.className}>
      {props.value}
    </button>
  );
};
function Composition(props) {
  return (
    <div>
      <form>
        <div>
          Username :{" "}
          <Input type="text" className="form-control" name="userName" />
        </div>
        <div>
          Password :{" "}
          <Input type="password" className="form-control" name="password" />
        </div>
        <div>
          <InputButton
            value="Login"
            className="btn-btn-primary"
            name="command"
          />
        </div>
      </form>
    </div>
  );
}

export default Composition;
