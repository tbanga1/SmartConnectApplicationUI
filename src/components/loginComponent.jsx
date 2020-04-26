import React from "react";
import InputComp from "./inputComponent";
import Joi from "joi-browser";
import Form from "./formComponent";
import auth from "../services/userService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  async doSubmit() {
    console.log("submitted");
    var resp = "";
    try {
      await auth.login(this.state.data);
      window.location = "/";
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
        <h1> Login </h1>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <InputComp
            name="username"
            label="Username"
            type="text"
            value={this.state.data.username}
            onChange={this.handleChange}
            autoFocus={"true"}
            icon="user"
            hint="Your e-mail"
            error={this.state.errors.username}
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
          <button className="btn btn-primary" disabled={this.validate()}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
