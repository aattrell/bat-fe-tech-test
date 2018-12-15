import React from 'react';
import styles from './table-header.css';

export default function TableHeader() { 
  return (
    <thead
      className={styles.tableHeader}>
      <tr>
        <th>
          Name
        </th>
        <th>
          Time
        </th>
        <th>
          Covers
        </th>
        <th>
          Seated
        </th>
      </tr>
    </thead>
  );
}
