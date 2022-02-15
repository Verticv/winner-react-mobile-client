import React, { useState } from "react";

import "./style.css";


const SortBy = ({ children, options, value, onChange, onClick}) => (
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
    <label style={{fontSize: '2.625rem'}} className="custom" htmlFor="filter-select">
      {children}
    </label>
  </div>
);

const Dropdown = ({options, children, labelStyle, labelClasses, isLeagueSelection, isContact=false }) => {
  const [sortValue, setSortValue] = useState(isContact ? "선택" : isLeagueSelection ? options?.[0] : "전체회차")

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
          <div className={labelClasses} style={labelStyle}><p style={{marginTop:"0.5rem"}}>{sortValue}</p></div>
          {children}
        </div>
      </SortBy>
    </form>
  )
}


export default Dropdown;


