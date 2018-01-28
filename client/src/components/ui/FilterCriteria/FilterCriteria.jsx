import React from "react";
import { categories, sizes, colors, brand } from "../../../config";
import MultiSelect from "../MultiSelect/MultiSelect";
import "./FilterCriteria.css";

const FilterCriteria = gender => {
  return (
    <div className="filterBox">
      <div className="ListContainer row">
        {[
          ["Category", categories],
          ["Brand", brand],
          ["Color", colors],
          ["Size", sizes]
        ].map((choice, key) => (
          <MultiSelect
            key={key}
            title={choice[0]}
            options={choice[1][gender.gender]}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterCriteria;
