import React, { Component } from "react";
import service from "../services/serviceReq";
import auth from "../services/userService";
import { ToastContainer, toast } from "react-toastify";
import Microwave from "../microwave.jpg";
import Washer from "../washer.jpg";
import Dryer from "../Dryer.jpg";
import Range from "../range.jpeg";
import Oven from "../range.jpeg";
import Dishwasher from "../dishwasher.jpg";
class ServiceDetailsPage extends Component {
  state = {
    serviceList: [],
    user: "",
  };
  componentDidMount = async () => {
    console.log("save clicked");
    var user = auth.getJwt();
    var { data } = await service.getUserServiceRequests();
    data.map((list) => {
      if (list.appliance == "Washer") list.img = Washer;
      if (list.appliance == "Microwave") list.img = Microwave;
      if (list.appliance == "Range") list.img = Range;
      if (list.appliance == "Dishwasher") list.img = Dishwasher;
      if (list.appliance == "Oven") list.img = Oven;
      if (list.appliance == "Dryer") list.img = Dryer;
    });
    this.setState({ serviceList: data, user: user });
  };

  handleDelete = async (item) => {
    const serviceList = this.state.serviceList.filter(
      (list) => list._id !== item._id
    );
    // this.setState({ serviceList });

    console.log("delete clicked", item);
    var user = auth.getJwt();
    var { data } = await service.deleteServiceRequests(item);
    this.setState({ serviceList: serviceList, user: user });

    toast.success("Service request deleted successfully");
    // window.location = `/Services/newRequest/:${item}`;
  };

  editService = (item) => {
    localStorage.setItem("editObj", JSON.stringify(item));
    localStorage.setItem("editReq", true);
    // const movies = this.state.movies.filter(m => m._id !== movie._id);
    // this.setState({ movies });
    item = "edit";
    window.location = `/Services/request/${item}`;
  };
  render() {
    const sortColumn = {
      path: "appliance",
      order: "asc",
    };
    return (
      <React.Fragment>
        <ToastContainer />
        <br />
        <p style={{ textAlign: "center" }}>
          <strong>Service details are listed below </strong>
        </p>

        <table className="table">
          <thead>
            <tr>
              <th>
                <strong>Appliance</strong>
              </th>
              <th>
                <strong>Under Warrenty</strong>
              </th>
              <th>
                <strong>Issue</strong>
              </th>
              <th>
                <strong>Additional Notes</strong>
              </th>
              <th>
                <strong>Date Of Service</strong>
              </th>
              <th>
                <strong>Time Of Service</strong>
              </th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.serviceList.map((list) => (
              <tr key={list._id}>
                <td>
                  <img
                    id={`${list.appliance}`}
                    src={list.img}
                    alt={`${list.appliance}`}
                  />{" "}
                  &nbsp;&nbsp;
                  <strong>{list.appliance}</strong>
                </td>
                <td>{list.underWarrenty}</td>
                <td>{list.issue}</td>
                <td>{list.additionalNotes}</td>
                <td>{list.dateOfService}</td>
                <td>{list.timeOfService}</td>
                <td>
                  <i
                    onClick={() => this.editService(list)}
                    style={{ cursor: "pointer" }}
                    className="fa fa-pencil"
                  ></i>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(list)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default ServiceDetailsPage;
