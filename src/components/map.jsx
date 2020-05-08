import React, { Component } from "react";

class Map extends Component {
  state = {};
  render() {
    return (
      <div class="map">
        <iframe
          width="100%"
          height="800"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJLX2exqIPyIkRXmWz1aR-K6I&key=AIzaSyCc-O4BAlkPlieOJYfB2ovpHxEMu27ajPA"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}

export default Map;
