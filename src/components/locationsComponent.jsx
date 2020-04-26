import React, { Component } from "react";

import GoogleMapReact from "google-map-react";

class Locations extends Component {
  state = {};
  render() {
    const defaultProps = {
      center: { lat: 40.73, lng: -73.93 },
      zoom: 12
    };
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        center={this.state.center}
        defaultZoom={this.props.zoom}
        onChildMouseEnter={this.onChildMouseEnter}
        onChildMouseLeave={this.onChildMouseLeave}
      />
    );
  }
}

export default Locations;
