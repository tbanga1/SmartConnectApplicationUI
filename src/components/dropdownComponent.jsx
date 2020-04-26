import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        <strong>{label}</strong>
      </label>
      <select
        name={name}
        id={name}
        {...rest}
        className="form-control"
        style={{ width: 500 }}
      >
        <option value="" />
        {options.map((option) => (
          <option key={option._id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
