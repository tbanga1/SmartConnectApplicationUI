import React, { Component } from "react";

class ContactComponent extends Component {
  state = {};
  render() {
    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
        title="This is a unique title"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
      />
    );
  }
}

export default ContactComponent;
