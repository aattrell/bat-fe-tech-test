import React from 'react';
import PropTypes from 'prop-types';
import styles from './seated.css';

export default function Seated({ cancelled, onChange, seated }) {
  return (
    <div>
      <h3 className={styles.heading}>
        Seated:
      </h3>
      <ul className={styles.list}>
        <li>
          <label>
            <input
              type="radio"
              value="seated"
              checked={seated && !cancelled}
              onChange={onChange} />
            Yes
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value={false}
              checked={!seated && !cancelled}
              onChange={onChange} />
            No
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value="cancelled"
              checked={cancelled}
              onChange={onChange} />
            Cancelled
          </label>
        </li>
      </ul>
    </div>
  );
}

Seated.PropTypes = {
  cancelled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  seated: PropTypes.bool.isRequired
};
