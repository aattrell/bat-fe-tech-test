import React from 'react';
import PropTypes from 'prop-types';
import styles from './heading.css';

export default function Heading({ title }) {  
  return (
    <h1 className={styles.heading}>
      {title}
    </h1>
  );
}

Heading.PropTypes = {
  title: PropTypes.string.isRequired
};
