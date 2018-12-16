import React from 'react';
import PropTypes from 'prop-types';
import styles from './summary.css';

export default function Summary({ firstName, lastName, partySize, time, title }) { 
  return (
    <div>
      <h3 className={styles.heading}>
        Name
      </h3>
      <div className={styles.value}>
        {title} {firstName} {lastName}
      </div>
      <h3 className={styles.heading}>
        Time
      </h3>
      <div className={styles.value}>
        {time}
      </div>
      <h3 className={styles.heading}>
        Covers
      </h3>
      <div className={styles.value}>
        {partySize}
      </div>
    </div>
  );
}

Summary.PropTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  partySize: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
