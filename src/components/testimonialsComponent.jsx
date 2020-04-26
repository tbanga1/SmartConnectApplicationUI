import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";
import { getReviews } from "../services/testimonialService";

class TestimonialsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
  }
  async populateTestimonials() {
    try {
      const { data } = await getReviews();
      this.setState({ lists: data });
      console.log("testing express API");
    } catch (ex) {
      if (ex.response && ex.response === 404) {
        this.props.history.replace("/not-found");
      }
    }
  }
  async componentWillMount() {
    await this.populateTestimonials();
  }

  render() {
    return (
      <MDBContainer>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-8">Testimonials</h2>
          <p className="dark-grey-text w-responsive mx-auto mb-9">
            Recent Smart Connect Appliance Repair Reviews in Baltimore
          </p>
          <MDBRow>
            {this.state.lists.map((comment, i) => (
              <MDBCol lg="4" md="6" className="mb-lg-0 mb-4" key={i}>
                <MDBCard testimonial>
                  <MDBCardBody>
                    <h4 className="font-weight-bold mb-4">
                      {comment.userInfo}
                    </h4>
                    <hr />
                    <p className="dark-grey-text mt-4">
                      <i className="fa fa-quote-left pr-2" />
                      {comment.comment}
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </section>
      </MDBContainer>
    );
  }
}
export default TestimonialsPage;

//imp :  https://www.smashingmagazine.com/2016/03/server-side-rendering-react-node-express/
