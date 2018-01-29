import React from "react";
import { withRouter } from "react-router-dom";

import { filters } from "../../../config";
import MultiSelect from "../MultiSelect/MultiSelect";
import "./FilterCriteria.css";

const FilterCriteria = ({ gender, history }) => {
  return (
    <div className="filterBox">
      <form className="ListContainer row" id="filterForm">
        {Object.entries(filters.options).map((choice, key) => (
          <MultiSelect
            key={key}
            title={choice[0]}
            options={choice[1][gender]}
          />
        ))}

        <div
          onClick={() => search(gender, history)}
          className="waves-effect waves-light btn"
        >
          <i className="material-icons left">search</i>search
        </div>
      </form>
    </div>
  );
};

function search(gender, history) {
  const form = document.querySelector("#filterForm");
  if (form) {
    let vals = Array.from(form.elements)
      .filter(el => el.classList[0] === "select-dropdown")
      .map(el => el.value);
    let queryString = valsToQuery(vals);
    if (queryString.length >= 1) {
      console.log(`/products/${gender}${queryString}`);
      history.push(`/products/${gender}${queryString}`);
    }
  }
  history.push(`/products/${gender}`);
}

function valsToQuery(vals) {
  let titles = Object.keys(filters.options);
  let query = [];
  vals.forEach((v, i) => {
    if (v === titles[i]) {
      // Still default parameter
    } else {
      v
        .split(", ")
        .forEach(param => query.push(`${filters.names[i]}=${param}`));
    }
    return;
  });
  return query.length === 0 ? "" : "?" + query.join("&");
}

export default withRouter(FilterCriteria);
