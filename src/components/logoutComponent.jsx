import React, { Component } from "react";
import auth from "../services/userService";

class LogoutPage extends Component {
  componentDidMount() {
    auth.logout();
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default LogoutPage;
