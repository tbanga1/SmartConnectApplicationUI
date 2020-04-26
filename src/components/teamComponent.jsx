import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";
import Team1 from "../Team1.jpg";
import Team2 from "../Team2.jpg";
import Team4 from "../Team4.jpg";
import Team3 from "../Team3.jpg";

import FooterPage from "./footerComponent";

const TeamPage = () => {
  return (
    <React.Fragment>
      <MDBContainer>
        <p className="m-5">
          <strong>
            See the difference "Smart Connect" customer service makes. We care
            about our customers and their families as much as we care about
            making quality appliances. If you need something, just let us know –
            from setting up Smart Connect service and repair appointments, to
            proper cleaning or maintenance techniques, to finding you the "Smart
            Connect" appliance manual you need, our customer care team can help.
          </strong>
        </p>

        <section className="text-center my-5">
          <h4 className="h1-responsive font-weight-bold my-8">Team</h4>
          <p className="dark-grey-text w-responsive mx-auto mb-9">
            <b> Smart Connect Family</b>
          </p>
          <MDBRow>
            <MDBCol lg="4" md="6" className="mb-lg-0 mb-8">
              <MDBCard testimonial>
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                  alt=""
                  className="rounded-circle img-fluid"
                />
                <MDBCardBody>
                  <h4 className="font-weight-bold mb-8">
                    Mary Khoel - CEO, Founder
                  </h4>
                  <hr />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-lg-0 mb-8">
              <MDBCard testimonial>
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                  alt=""
                  className="rounded-circle img-fluid"
                />
                <MDBCardBody>
                  <h4 className="font-weight-bold mb-8">
                    Dave Johnson - Professional Technician
                  </h4>
                  <hr />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-lg-0 mb-8">
              <MDBCard testimonial>
                <img src={Team4} alt="" className="rounded-circle img-fluid" />
                <MDBCardBody>
                  <h4 className="font-weight-bold mb-8">
                    Lilly Joe - Customer Support
                  </h4>
                  <hr />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <br />
          <MDBRow>
            <MDBCol lg="4" md="6" className="mb-lg-0 mb-8">
              <MDBCard testimonial>
                <img src={Team1} alt="" className="rounded-circle img-fluid" />
                <MDBCardBody>
                  <h4 className="font-weight-bold mb-8">
                    Martin Judy - Professional Technician
                  </h4>
                  <hr />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-lg-0 mb-8">
              <MDBCard testimonial>
                <img src={Team2} alt="" className="rounded-circle img-fluid" />
                <MDBCardBody>
                  <h4 className="font-weight-bold mb-8">
                    Jay Markle - Professional Technician
                  </h4>
                  <hr />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-lg-0 mb-8">
              <MDBCard testimonial>
                <img src={Team3} alt="" className="rounded-circle img-fluid" />
                <MDBCardBody>
                  <h4 className="font-weight-bold mb-8">
                    Lee Min - Professional Technician
                  </h4>
                  <hr />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
      <FooterPage />
    </React.Fragment>
  );
};

export default TeamPage;
