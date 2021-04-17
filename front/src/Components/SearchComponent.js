import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const SearchComponent = function SearchComponent(props) {
  const [searchKey, setSearchKey] = useState("");

  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(ev) => {
          setSearchKey(ev.target.value);
        }}
      />
      <button
        className="btn btn-outline-success"
        onClick={(ev) => {
          ev.preventDefault();
          props.onSearch && props.onSearch(searchKey);
        }}
      >
        Search
      </button>
    </form>
  );
};

SearchComponent.propTypes = {
  onSearch: PropTypes.func,
};

export default withRouter(SearchComponent);
