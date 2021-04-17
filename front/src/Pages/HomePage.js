import ShowList from "../Components/ShowList";
import React from "react";
import PropTypes from "prop-types";

const HomePage = function HomePage(props) {
  return <div>{<ShowList searchKey={props.searchKey} />}</div>;
};

HomePage.propTypes = {
  searchKey: PropTypes.string,
};

export default HomePage;
