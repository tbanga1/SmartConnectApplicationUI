import React, { Component } from "react";
import { Link } from "react-router-dom"; // import the react-router-dom components
import FooterPage from "./footerComponent";

import step1 from "../Step1.jpg";
import step2 from "../Step2.jpg";
import step3 from "../Step3.jpg";

import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";

class ServicesPage extends Component {
  state = {
    userId: 0, //api call to get user details
  };
  render() {
    return (
      <React.Fragment>
        <ul>
          <li className={"nav-item"}>
            <Link
              className="nav-link navLinkservice"
              to={`/Services/request/${"new"}`}
              onClick={""}
            >
              Book a service request
            </Link>
          </li>

          <li className={"nav-item"}>
            <Link
              className="nav-link navLinkservice"
              to={`/Services/${this.state.userId}`}
              onClick={""}
            >
              View Service history
            </Link>
          </li>
        </ul>

        <strong style={{ textAlign: "center", marginLeft: 550 }}>
          How does it work?
        </strong>
        <p></p>
        <MDBRow>
          <MDBCol md="4">
            <MDBCard>
              <MDBCardImage
                top
                src={step1}
                overlay="white-slight"
                hover
                waves
                alt="MDBCard image cap"
              />
              <MDBCardBody className="elegant-color white-text rounded-bottom">
                <MDBCardTitle>Fill details</MDBCardTitle>
                <hr className="hr-light" />
                <MDBCardText className="white-text">
                  Enter basic information about the appliance issue and schedule
                  an appoitnemt at your convenience{" "}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard>
              <MDBCardImage
                top
                src={step2}
                overlay="white-slight"
                hover
                waves
                alt="MDBCard image cap"
              />
              <MDBCardBody className="elegant-color white-text rounded-bottom">
                <MDBCardTitle>Stuck ???</MDBCardTitle>
                <hr className="hr-light" />
                <MDBCardText className="white-text">
                  Call us and we are happy to help you{" "}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard>
              <MDBCardImage
                top
                src={step3}
                overlay="white-slight"
                hover
                waves
                alt="MDBCard image cap"
              />
              <MDBCardBody className="elegant-color white-text rounded-bottom">
                <MDBCardTitle>Enjoy peace of mind</MDBCardTitle>
                <hr className="hr-light" />
                <MDBCardText className="white-text">
                  Relax knowing we’ll help you get the most out of your product,
                  from troubleshooting to repairs and beyond.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <FooterPage />
      </React.Fragment>
    );
  }
}

export default ServicesPage;
