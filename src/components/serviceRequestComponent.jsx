import React, { Component } from "react";
import queryString from "query-string";
import { render } from "react-dom";
import FooterPage from "./footerComponent";
import Joi from "joi-browser";
import InputComp from "./inputComponent";
import Select from "./dropdownComponent";
import Form from "./formComponent";
import dishwasher from "../dishwasher.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth, { saveServiceRequests } from "../services/userService";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";

import "react-datepicker/dist/react-datepicker.css";

//http://localhost:3000/Services/newRequest/0?userName=%27hhhh%27
class ServiceRequestPage extends Form {
  handleSaveRequest = async () => {
    console.log("save clicked");
    if (!auth.getJwt())
      toast.info("Kindly login or register to schedule a service request");
    else {
      const res = await saveServiceRequests(this.state);
      if (res.status == 200) {
        toast.success(
          "Service request logged successfully , you can check your service request under service history tab"
        );
      } else {
        toast.error("Error occured while scheduling a Service request");
      }
    }
  };

  componentDidMount() {
    console.log("meee", this.props.match.params.servObj);

    if (localStorage.getItem("editReq") == "true") {
      var item = JSON.parse(localStorage.getItem("editObj"));
      var data = {
        appliance: item.appliance,
        underWarrenty: item.underWarrenty,
        issue: item.issue,
        additionalNotes: item.additionalNotes,
        dateOfService: item.dateOfService,
        timeOfService: item.timeOfService,
      };

      this.setState({ data: data, _id: item._id });
      localStorage.setItem("editReq", false);
    }
  }
  handleDateChange = (val) => {
    console.log("val", val);
    let data = this.state.data;
    data.val = val;
    this.setState({ data: data });
  };

  state = {
    _id: "",
    data: {
      appliance: "",
      underWarrenty: "",
      issue: "",
      additionalNotes: "",
      dateOfService: "",
      timeOfService: "10.00",
    },
    appliance: "",
    errors: {},
  };

  valid = function (current) {
    return current.day() !== 0 && current.day() !== 6;
  };
  appliancesList = [
    { _id: 1, name: "Washer" },
    { _id: 2, name: "Dryer" },
    { _id: 3, name: "Range" },
    { _id: 4, name: "Microwave" },
    { _id: 5, name: "Dishwasher" },
    { _id: 6, name: "Oven" },
  ];

  underWarrentyList = [
    { _id: 1, name: "Yes" },
    { _id: 2, name: "No" },
  ];
  schema = {
    appliance: Joi.string().required().label("Appliance"),
    underWarrenty: Joi.string().required().label("Warrenty Type"),
    issue: Joi.string().required().label("Problem"),
    additionalNotes: Joi.string().required().label("Additional comments"),
    dateOfService: Joi.string().required().label("Date Of Service"),
    timeOfService: Joi.string().required().label("Time Of Service"),
  };

  errorFunction = () => {
    toast.error("Failed to register a request");
  };
  doSubmit = () => {
    console.log("request submitted");
    console.log("save clicked"); //write api to savedata in database and send back to srvices page
    this.handleSaveRequest();
  };

  onRadioClick = (nbr) => {
    this.setState({
      appliance: nbr,
    });
  };

  render() {
    console.log("request", this.props.location.search);
    const { userName } = queryString.parse(this.props.location.search); //object destructruing
    console.log("queryString :", userName); //o/p hhhh
    console.log("input params:", this.props.match.params.type);
    // o/p  0
    return (
      <React.Fragment>
        <ToastContainer />
        <div className="m-3">
          <h1> Schedule a Request </h1>
          <hr />

          <form onSubmit={this.handleSubmit}>
            <Select
              name="appliance"
              value={this.state.data.appliance}
              label="Appliance"
              options={this.appliancesList}
              onChange={this.handleChange}
              error={this.state.errors.appliance}
            />
            <Select
              name="underWarrenty"
              value={this.state.data.underWarrenty}
              label="Under Warrenty"
              options={this.underWarrentyList}
              onChange={this.handleChange}
              error={this.state.errors.underWarrenty}
            />
            <InputComp
              name="issue"
              label="Issue"
              type="textarea"
              value={this.state.data.issue}
              onChange={this.handleChange}
              error={this.state.errors.issue}
            />
            <InputComp
              name="additionalNotes"
              label="Additional Notes"
              type="textarea"
              value={this.state.data.additionalNotes}
              onChange={this.handleChange}
              error={this.state.errors.additionalNotes}
            />
            <InputComp
              id="dateOfService"
              //display={props.display == "none" ? "none" : "block"}
              className="form-group"
              name="dateOfService"
              label="Date Of Service"
              value={this.state.data.dateOfService}
              onChange={this.handleChange}
              //onChange={this.handleDateTimeChange}
              showTimeSelect
              dateFormat="Pp"
              placeholderText="Select a weekday"
              error={this.state.errors.dateOfService}
            />
            <InputComp
              id="timeOfService"
              //display={props.display == "none" ? "none" : "block"}
              className="form-group"
              name="timeOfService"
              label="Time Of Service"
              value={this.state.data.timeOfService}
              onChange={this.handleChange}
              //onChange={this.handleDateTimeChange}
              showTimeSelect
              dateFormat="Pp"
              placeholderText="Select a weekday"
              error={this.state.errors.timeOfService}
            />
            <br />
            <button className="btn-primary btn sm">Save</button>
          </form>

          <FooterPage />
        </div>
      </React.Fragment>
    );
  }
}

export default ServiceRequestPage;
