import React, { Component } from "react";
import offerImg from "../offers.PNG";
import FooterPage from "./footerComponent";
class OffersPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <img
          id="offerImg"
          src={offerImg}
          alt="offerImg"
          fluid
          className="OfferImg"
        />{" "}
        <br />
        <h3>
          <strong style={{ "margin-left": "30%" }}>
            Call us to know more about our plans
          </strong>
        </h3>
        <FooterPage />
      </React.Fragment>
    );
  }
}

export default OffersPage;
