import React, { Component } from "react";
import Form from "./formComponent";
import InputComp from "./inputComponent";
import Joi from "joi-browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth, { register } from "../services/userService";
class Register extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    name: Joi.string()
      .required()
      .label("Name"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password")
  };

  async doSubmit() {
    console.log("submitted");
    var resp = "";
    try {
      resp = await register(this.state.data);
      if (resp.status == 200) {
        //        toast.success("User successfully registered");
        console.log("header token", resp.headers["x-auth-token"]);
        auth.loginWithJwt(resp.headers["x-auth-token"]);
        window.location = "/";
      } else toast.error("Error occured during user registeration");
    } catch (ex) {
      if (ex.response && ex.response.status == 400) {
        const errors = { ...this.state.erros };
        errors.username = ex.response.data;
        toast.error(ex.response.data);
        this.setState({ errors });
      }
    }
  }

  render() {
    return (
      <div className="m-3">
        <ToastContainer />
        <h1> Register </h1>
        <hr />
        <br />
        <ToastContainer />
        <form onSubmit={this.handleSubmit}>
          <InputComp
            name="username"
            label="Username"
            type="text"
            value={this.state.data.username}
            onChange={this.handleChange}
            autoFocus={true}
            error={this.state.errors.username}
            icon="user"
            hint="Your e-mail"
          />
          <InputComp
            name="password"
            label="Password"
            type="password"
            value={this.state.data.password}
            onChange={this.handleChange}
            error={this.state.errors.password}
            icon="lock"
            hint="Your password"
          />

          <InputComp
            name="name"
            label="Name"
            type="text"
            value={this.state.data.name}
            onChange={this.handleChange}
            error={this.state.errors.name}
            icon="tag"
            hint="Your name"
          />
          <button className="btn btn-primary" disabled={this.validate()}>
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
