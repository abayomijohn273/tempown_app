import React from "react";
import PropTypes from "prop-types";
const Container = (props) => {
  return <div className="container mx-auto px-4">{props.children}</div>;
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
