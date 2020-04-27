import React, { Component } from "react";

class ContactComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3083.478496632825!2d-76.60816778463499!3d39.3906793794976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c80fa2cf86a6a9%3A0x36774b98ccc72a6d!2s7800%20York%20Rd%2C%20Towson%2C%20MD%2021252!5e0!3m2!1sen!2sus!4v1587974067151!5m2!1sen!2sus"
          width="600"
          height="450"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </React.Fragment>
    );
  }
}

export default ContactComponent;
