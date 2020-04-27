import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdbreact";

import locator from "../Service_locator.jpg";
import request from "../Service_Request.jpg";
import contactUs from "../ContactCustRep.jpg";

class ConnectPage extends Component {
  scheduleRequest = () => {
    console.log("schedule clicked from home page", this.props.data); //write api to savedata in database and send back to srvices page
    this.props.data.history.push("/Services/request/new"); // go to schedule services page
  };
  render() {
    console.log("in connect clicked", this.props.data);

    return (
      <MDBRow>
        <MDBCol>
          <MDBCard narrow>
            <MDBCardImage cascade className="img-fluid" src={request} />
            <MDBCardBody cascade>
              <MDBCardTitle>Service Request</MDBCardTitle>
              <MDBCardText>
                Start an online service request for your Samsung product.
              </MDBCardText>
              <MDBBtn onClick={() => this.scheduleRequest()}>
                Schedule a Repair
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={locator} />
            <MDBCardBody cascade>
              <MDBCardTitle>Service Locations</MDBCardTitle>
              <MDBCardText>
                Quick view of all our Service Locations in baltimore
              </MDBCardText>
              <MDBBtn href="#">Locate</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol>
          <MDBCard narrow>
            <MDBCardImage cascade className="img-fluid" src={contactUs} />
            <MDBCardBody cascade>
              <MDBCardTitle>Contact Us</MDBCardTitle>
              <MDBCardText>
                Hello, Would you like us to contact you regarding our services?
                Our customer care center is ready to help weekdays from 8 a.m.
                to 8 p.m. EST—by phone, chat or email.
              </MDBCardText>
              <MDBBtn onClick={() => this.scheduleRequest()}>Contact Me</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default ConnectPage;
