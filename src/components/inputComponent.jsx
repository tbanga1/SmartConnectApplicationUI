import React, { Component } from "react";
import { MDBInput } from "mdbreact";

const Input = props => {
  console.log("props:", props);
  return (
    <div className="form-group">
      <label htmlFor={props.name}>
        <strong>{props.label}</strong>
      </label>
      <MDBInput
        value={props.value}
        autoFocus={props.autoFocus}
        name={props.name}
        id={props.name}
        type={props.type}
        style={props.style}
        //display={props.display == "none" ? "none" : "block"}
        className="inputStyle form-control"
        onChange={props.onChange}
        icon={props.icon}
        hint={props.hint}
        src={props.src}
        outline
        size="sm"
      />{" "}
      {props.error && <div className="alert alert-damger">{props.error}</div>}
    </div>
  );
};

export default Input;
