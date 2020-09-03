import React from "react";
import ButtonList from "../buttonList/buttonList";
import "./filterItem.style.scss";

const FilterItem = ({ filterTitle, listArr }) => {
  return (
    <>
      <div className="filter-item">
        <strong>{filterTitle}</strong>
        <ButtonList details={listArr} sectionName={filterTitle} />
      </div>
    </>
  );
};

export default FilterItem;
