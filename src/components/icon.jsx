import React from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

export const Icon = (props) => {
  let link1 = JSON.stringify(props.service);
  return (
    <Link
      style={{ cursor: "pointer" }}
      className={props.className}
      to={
        props.action == "edit"
          ? `/Services/editRequest/:${link1}`
          : `/Services/deleteRequest/:${props.service}`
      }
      onClick={() => {
        localStorage.setItem("editObj", JSON.stringify(props.service));
      }}
      aria-hidden="true"
      display={props.display}
    ></Link>
  );
};

export const DateComp = (props) => {
  return (
    <div className="form-group">
      <DatePicker
        id={props.id}
        //display={props.display == "none" ? "none" : "block"}
        className="form-group"
        name={props.name}
        label={props.label}
        value={props.value}
        onChange={props.onChange}
        //onChange={handleDateChange}
        showTimeSelect
        dateFormat="Pp"
        placeholderText="Select a weekday"
        error={props.error}
      />
    </div>
  );
};
