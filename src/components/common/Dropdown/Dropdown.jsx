import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSort } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

// const options = ["A-Z", "Z-A", "Newest", "Most popular"];

const SortBy = ({ children, options, value, onChange, onClick }) => (
  <div className="container">
    <select
      className="select-overlay"
      id="filter-select"
      value={value}
      onChange={onChange}
      onClick={onClick}
    >
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <label className="custom" htmlFor="filter-select">
      {children}
    </label>
  </div>
);

const Dropdown = ({options, children, labelStyle}) => {
  const [sortValue, setSortValue] = useState(options?.[0])

  const onChange = e => setSortValue(e.currentTarget.value);

  return (
    <form style={{width: '100%'}}>
      <SortBy
        options={options}
        value={sortValue}
        onChange={onChange}
        onClick={() => console.log('on click!')}
      >
        <div className="flex w-full items-center justify-between">
          <div style={labelStyle}>{sortValue}</div>
          {children}
        </div>
        {/* <FontAwesomeIcon icon={faSort} /> */}
      </SortBy>
    </form>
  )
}


export default Dropdown;


