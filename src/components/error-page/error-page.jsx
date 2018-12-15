import React from 'react';
import PropTypes from 'prop-types';

const ErrorPage = ({ error }) => (
  <h1 className="error">
    Error: {error.message}
  </h1>
);

export default ErrorPage;

ErrorPage.propTypes = {
  error: PropTypes.object.isRequired
};
