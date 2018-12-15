import React from 'react';
import PropTypes from 'prop-types';

export default function Comments({ notes }) { 
  return (
    <p>{notes}</p>
  );
}

Comments.PropTypes = {
  notes: PropTypes.string.isRequired
};
