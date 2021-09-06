import React from "react";
import SearchBar from "../../../../components/SearchBar";
import { updateFilter, filterSelector } from "../../../../store/filters/slice";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const filters = useSelector(filterSelector);
  return (
    <SearchBar
      value={filters?.search}
      onSubmit={(e) => dispatch(updateFilter({ filter: "search", value: e }))}
    />
  );
};

export default Search;
