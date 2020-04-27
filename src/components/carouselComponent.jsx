import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";
import slider1 from "../SlideShow2.jpg";
import slider2 from "../slider1.jpg";
import slider3 from "../SlideShow6.jpg";
import slider4 from "../SlideShow7.jpg";
class CarouselPage extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={4}
          showControls={true}
          data-interval="false"
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={slider3}
                  alt="First slide"
                />
              </MDBView>
            </MDBCarouselItem>

            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={slider1}
                  alt="First slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={slider2}
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>

            <MDBCarouselItem itemId="4">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={slider4}
                  alt="Fourth slide"
                />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h2-responsive">Home appliances support</h3>
                <p>How can we help you?</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }
}

export default CarouselPage;
