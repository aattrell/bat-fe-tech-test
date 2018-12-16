import React from 'react';
import PropTypes from 'prop-types';
import styles from './comments.css';

export default function Comments({ notes }) { 
  return (
    <div>
      <h3 className={styles.heading}>
        Notes
      </h3>
      <p className={styles.comments}>
        {notes}
      </p>
    </div>
  );
}

Comments.PropTypes = {
  notes: PropTypes.string.isRequired
};
