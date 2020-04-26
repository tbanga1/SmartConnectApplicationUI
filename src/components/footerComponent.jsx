import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="font-small mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol>
              <ul>
                <li>
                  <a href="#!">FAQ</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol>
              <ul>
                <li>
                  <a href="#!">Contact Information</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol>
              <ul>
                <li>
                  <a href="#!">Terms of use</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol>
              <ul>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.SmartConnect.com">
            {" "}
            SmartConnect.com. All rights reserved.{" "}
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
