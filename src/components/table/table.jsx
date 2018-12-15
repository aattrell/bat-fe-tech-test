import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './table-header.jsx';
import TableRow from './table-row.jsx';

export default function Table({ bookings, setBookingFormState }) { 
  const row = booking => (
    <TableRow
      key={`${booking.lastName} ${booking.time}`}
      setBookingFormState={setBookingFormState}
      {...booking} />
  );

  return (
    <table>
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
