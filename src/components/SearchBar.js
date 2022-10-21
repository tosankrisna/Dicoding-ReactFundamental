import React from "react";
import PropTypes from "prop-types";

function SearchBar({ keyword, keywordChange }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="bg-gray-100 px-3 py-2 lg:w-3/12 w-4/12 rounded-full focus:outline-none placeholder:text-black"
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
