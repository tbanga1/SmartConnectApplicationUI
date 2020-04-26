import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const BasicTable = ({ list }) => {
  return (
    <MDBTable>
      <MDBTableHead color="primary-color" textWhite striped="true" hover="true">
        <tr>
          <th>Service order</th>
          <th>Appliance</th>
          <th>Under Warrenty</th>
          <th>Issue</th>
          <th>Additional Notes</th>
          <th>Date of service</th>
          <th>Time of service</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {list.map((serviceItem, i) => (
          <tr value={serviceItem._id} key={serviceItem._id}>
            <td>{serviceItem._id}</td>
            <td>{serviceItem.appliance}</td>
            <td>{serviceItem.underWarrenty}</td>
            <td>{serviceItem.issue}</td>
            <td>{serviceItem.additonalNotes}</td>
            <td>{serviceItem.dateOfService}</td>
            <td>{serviceItem.timeOfService}</td>
            <td>
              <p class="fa fa-pencil"></p>
            </td>
            <td>
              <p class="fa fa-trash"></p>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default BasicTable;
