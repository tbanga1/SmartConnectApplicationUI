import React from "react";

const Edit = props => {
  let classes = "fa fa-pencil";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Edit;
