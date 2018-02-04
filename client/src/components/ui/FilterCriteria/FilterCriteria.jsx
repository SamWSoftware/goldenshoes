import React from "react";
import { withRouter, Link } from "react-router-dom";

import { filters } from "../../../config";
import Select from "../Select/Select";
import "./FilterCriteria.css";

const FilterCriteria = ({ gender, history }) => {
  return (
    <div className="filterBox">
      {filterForm(gender, history)}
      {mobileForm(gender, history)}
    </div>
  );
};

function filterForm(gender, history) {
  return (
    <form id="filterForm">
      <div className="ListContainer row hide-on-med-and-down">
        {Object.entries(filters.options).map((choice, key) => (
          <div className="col m3" key={key}>
            <Select
              title={choice[0]}
              options={choice[1][gender]}
              multiple={true}
              placeholder={choice[0]}
            />
          </div>
        ))}
        <div
          onClick={() => search("#filterForm", gender, history)}
          className="waves-effect waves-light btn"
        >
          <i className="material-icons left">search</i>search
        </div>
        <Link
          to={`/products/${gender}`}
          id="clearFilter"
          className="waves-effect waves-light btn"
        >
          <i className="material-icons left">close</i>Clear
        </Link>
      </div>
    </form>
  );
}

function mobileForm(gender, history) {
  return (
    <form id="mobileFilterForm">
      <div id="mobile-filter-box" className="hide-on-large-only">
        <div data-activates="mobile-filter" className="button-collapse center">
          <h5>FILTER</h5>
        </div>
        <ul className="side-nav row" id="mobile-filter">
          <li className="center">
            <h5>FILTER</h5>
          </li>
          {Object.entries(filters.options).map((choice, key) => (
            <li className="col s10 offset-s1" key={key}>
              <Select
                title={choice[0]}
                options={choice[1][gender]}
                multiple={true}
                placeholder={choice[0]}
              />
            </li>
          ))}
          <li className="search-bottom">
            <a
              onClick={() => search("#mobileFilterForm", gender, history)}
              className="waves-effect waves-light btn"
            >
              <i className="material-icons left">search</i>search
            </a>
          </li>
          <li className="clear-bottom">
            <Link
              to={`/products/${gender}`}
              className="waves-effect waves-light btn"
            >
              <i className="material-icons left">close</i>Clear
            </Link>
          </li>
        </ul>
      </div>
    </form>
  );
}

function search(formId, gender, history) {
  const form = document.querySelector(formId);
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
  history.goBack();
}

function valsToQuery(vals) {
  let titles = Object.keys(filters.options);
  let query = [];
  console.log(titles, vals);
  vals.forEach((v, i) => {
    if (v === String(titles[i])) {
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
