import React from 'react';
import PropTypes from 'prop-types';

export default function Seated({ cancelled, onChange, seated }) {
  return (
    <div>
      <p>Seated:</p>
      <ul>
        <li>
          <label>
            <input
              type="radio"
              value="seated"
              checked={seated && !cancelled}
              onChange={onChange}
            />
            Yes
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value={false}
              checked={!seated && !cancelled}
              onChange={onChange}
            />
            No
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value="cancelled"
              checked={cancelled}
              onChange={onChange}
            />
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
