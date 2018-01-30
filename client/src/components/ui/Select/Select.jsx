import React from "react";

const Select = ({
  title,
  placeholder = "",
  options = [],
  values = options,
  enable = values.map(v => true),
  multiple = false
}) => {
  return (
    <div className="input-field">
      <select multiple={multiple}>
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options.map(
          (option, k) =>
            typeof option === "string" || typeof option === "number" ? (
              <option key={k} value={values[k]} disabled={!enable[k]}>
                {option}
              </option>
            ) : (
              <option key={k} value={values[k].name}>
                {option.name}
              </option>
            )
        )}
      </select>
      <label>{title}</label>
    </div>
  );
};

export default Select;
