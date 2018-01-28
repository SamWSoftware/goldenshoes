import React from "react";

const MultiSelect = ({ title, options = [] }) => {
  return (
    <div>
      <div className="input-field col m3">
        <select multiple>
          <option value="" disabled selected>
            {title}
          </option>
          {options.map(
            (value, k) =>
              typeof value === "string" || typeof value === "number" ? (
                <option key={k} value={value}>
                  {value}
                </option>
              ) : (
                <option key={k} value={value.name}>
                  {value.name}
                </option>
              )
          )}
        </select>
        <label>{title}</label>
      </div>
    </div>
  );
};

export default MultiSelect;
