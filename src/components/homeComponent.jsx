import React, { Component } from "react";
import TestimonialsPage from "./testimonialsComponent";
import CarouselPage from "./carouselComponent";
import ConnectPage from "./connectComponent";
import FooterPage from "./footerComponent";
import http from "../services//httpService";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    console.log("props:::", props);
    this.state = { apiResponse: "", comments: "" };
  }
  // Fetches our GET route from the Express server.

  callBackendAPI = async () => {
    const resp = await http.get("http://localhost:9000/testAPI");
    return resp;
  };
  componentWillMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then((res) => {
        //  console.log("response is", res.data);
        this.setState({ apiResponse: res.data.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <strong className="m-5">
          <p className="App-intro">{this.state.apiResponse}</p>
        </strong>
        <CarouselPage />
        <TestimonialsPage />
        <ConnectPage data={this.props} />
        <FooterPage />
      </div>
    );
  }
}
export default HomePage;
