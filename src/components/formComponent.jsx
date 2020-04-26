import React, { Component } from "react";
import Joi from "joi-browser";
class Form extends Component {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };
  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);
    console.log(result);

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;
    /*const errors = {};
    if (this.state.data.username.trim() === "")
      errors.username = "username is required";

    if (this.state.data.password.trim() === "")
      errors.password = "Password is required";
    return Object.keys(errors).length === 0 ? null : errors;

    */
  };

  validateProperty = ({ name, value }) => {
    console.log("in validate property ");
    //if (e.currentTarget.value.trim() === "") return "Username is required";
    var obj = { [name]: value };
    const schema = {
      [name]: this.schema[name]
    };
    let result = {};
    result = Joi.validate(obj, schema);
    console.log("error in property", result.error);
    return result.error ? result.error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    else {
      const usernameInput = this.state.data.username;
      console.log("username :", usernameInput);
    }
    //call server
    this.doSubmit();
  };

  handleChange = e => {
    console.log("in handle change ", e);
    const acct = this.state.data;
    acct[e.currentTarget.name] = e.currentTarget.value;
    const err = { ...this.state.errors };
    const errMsg = this.validateProperty(e.currentTarget);
    if (errMsg) err[e.currentTarget.name] = errMsg;
    else delete err[e.currentTarget.name];
    console.log("error ", errMsg);
    this.setState({ data: acct, errors: err });
  };
}

export default Form;
