import React from 'react';
import PropTypes from 'prop-types';

const InlineError = ({ text }) => (
<span style={{ color: "#DB2828" }}>{text}</span>
);

InlineError.propTypes = {
  text: PropTypes.string.isRequired
};

export default InlineError;
