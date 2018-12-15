import React from 'react';
import PropTypes from 'prop-types';
import styles from './table-header.css';

export default function TableHeader({ headings }) {
  const renderHeading = (heading) => (
    <th
      className={styles.tableHeaderCell}
      key={heading}>
      {heading}
    </th>
  );

  return (
    <thead
      className={styles.tableHeader}>
      <tr>
        {headings.map(renderHeading)}
      </tr>
    </thead>
  );
}

TableHeader.defaultProps = {
  headings: [
    'Name',
    'Time',
    'Covers',
    'Seated'
  ],
};

TableHeader.PropTypes = {
  headings: PropTypes.array.isRequired,
};
