import React, { Component } from "react";
import auth from "../services/authService";
import Table from "./table";
import Icon from "./icon";

class ServicesTable extends Component {
  columns = [
    {
      path: "appliance",
      label: "Appliance",
      //  content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: "underWarrenty", label: "Under Warrenty" },
    { path: "issue", label: "Issue" },
    { path: "additionalNotes", label: "Additional Notes" },
    { path: "dateOfService", label: "Date of service" },
    {
      key: "edit",
      content: (list) => (
        <Icon className="fa fa-pencil" service={list} action="edit" />
      ),
    },
    {
      key: "delete", // onClick={() => this.props.onDelete(movie)}
      content: (list) => (
        <Icon
          className="fa fa-trash"
          service={list}
          action="delete"
          display={list._dateOfService <= new Date() ? "none" : "block"}
        />
      ),
    },
  ];
  editServiceRequest(list) {
    console.log(list._id);
    //api call to edit

    //console.log(date.getTime());
  }
  deleteServiceRequest(list) {
    console.log(list._id);
    //api to delete service request
  }
  constructor() {
    super();
    //  const user = auth.getCurrentUser();
    // if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }

  render() {
    const { list, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={list}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ServicesTable;
