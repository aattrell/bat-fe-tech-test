import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './table-header.jsx';
import TableRow from './table-row.jsx';
import styles from './table.css';

export default function Table({ bookings, setBookingFormState }) { 
  const row = booking => {
    const { firstName, lastName, time } = booking;
    const key = `${firstName} ${lastName} ${time}`;

    return (
      <TableRow
        key={key}
        setBookingFormState={setBookingFormState}
        {...booking} />
    );
  };

  return (
    <table
      className={styles.table}>
      <caption
        className={styles.screenReadersOnly}>
        A table to allow you to see and update the status of 
        each of your upcoming reservations
      </caption>
      <TableHeader />
      <tbody>
        {bookings.map(row)}
      </tbody>
    </table>
  );
}

Table.PropTypes = {
  bookings: PropTypes.array.isRequired,
  setBookingFormState: PropTypes.func.isRequired
};
