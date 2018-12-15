import React from 'react';
import PropTypes from 'prop-types';
import styles from './error-page.css';

const ErrorPage = ({ error }) => (
  <h1 className={styles.error}>
    Error: {error.message}
  </h1>
);

export default ErrorPage;

ErrorPage.propTypes = {
  error: PropTypes.object.isRequired
};
