import React from 'react';
import PropTypes from 'prop-types';

export default function Summary({ firstName, lastName, partySize, time, title }) { 
  return (
    <div>
      <h3>
        Name
      </h3>
      <div>
        {title} {firstName} {lastName}
      </div>
      <h3>
        Time
      </h3>
      <div>
        {time}
      </div>
      <h3>
        Covers
      </h3>
      <div>
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
