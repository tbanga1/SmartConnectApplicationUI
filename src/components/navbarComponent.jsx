import React, { Component } from "react";
import logo from "../logo4.png";
import { MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import NavLinkComp from "./navLinkComponent";
import { Link, NavLink } from "react-router-dom";
const Navbar = ({ user }) => {
  console.log("user is in navbar", user);
  return (
    <div className="tabcolor">
      <MDBRow>
        <MDBCol sm={"2"}>
          <img id="logo" src={logo} alt="logo" />
        </MDBCol>
        <MDBCol>
          <nav
            className="navbar navbar-expand-lg navbar-light tabcolor "
            expand="md"
            scrolling="true"
            fixed="top"
          >
            <ul className="navbar-nav ">
              <li>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/Services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/AboutUs">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/Offers">
                  Offers
                </Link>
              </li>
            </ul>
          </nav>
        </MDBCol>
        <MDBCol sm={"2"}>
          {!user && (
            <React.Fragment>
              <Link to="/login" className="login">
                Login
              </Link>
              &nbsp; <b style={{ color: "white" }}>| </b> &nbsp;
              <Link to="/register" className="login">
                Register
              </Link>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <Link to="/profile" className="login">
                {user.name}
              </Link>
              &nbsp; <b style={{ color: "white" }}>| </b> &nbsp;
              <Link to="/logout" className="login">
                Logout
              </Link>
            </React.Fragment>
          )}
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Navbar;
