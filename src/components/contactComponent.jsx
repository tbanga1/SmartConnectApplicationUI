import React, { Component } from "react";

class ContactComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-5 mb-4 hours">
            <h3>
              <span class="fa fa-clock-o"></span> Hours of Operation
            </h3>
            <br />
            <p>Monday: 8:00 am - 6:00 pm</p>
            <p>Tuesday: 8:00 am - 6:00 pm</p>
            <p>Wednesday: 8:00 am - 6:00 pm</p>
            <p>Thursday: 8:00 am - 6:00 pm</p>
            <p>Friday: 8:00 am - 6:00 pm</p>
            <p>Saturday: 8:00 am - 4:00 pm</p>
            <p>Sunday: Closed</p>
          </div>

          <div class="col-md-6 mb-4 map">
            <h3>
              <span class="fa fa-map"></span>Maps
            </h3>
            <br />
            <div class="map">
              {/*<iframe
                width="500"
                height="450"
                frameborder="0"
                style="border:0"
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJLX2exqIPyIkRXmWz1aR-K6I&key=AIzaSyCc-O4BAlkPlieOJYfB2ovpHxEMu27ajPA"
                allowfullscreen
></iframe>*/}
            </div>
          </div>
          <div class="col-md-1"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactComponent;
