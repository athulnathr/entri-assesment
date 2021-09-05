import React, { useState } from "react";
import "./styles.scss";
const SearchBar = ({ placeholder, onSubmit, value }) => {
  const [search, setSearch] = useState(value);
  return (
    <div className="wrapper">
      <div className="searchBar">
        <input
          id="searchQueryInput"
          type="text"
          name="searchQueryInput"
          placeholder={placeholder || "Search"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          id="searchQuerySubmit"
          type="button"
          onClick={() => onSubmit(search)}
        >
          <span className="material-icons">search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
