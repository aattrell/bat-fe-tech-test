import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../heading/heading.jsx';
import Table from '../table/table.jsx';
import FormContainer from '../action-panel/form-container.jsx';
import todaysData from '../../utils/todays-data.js';
import styles from './layout.css';

export default function Layout({ formData, reservations, setBookingFormState, setReservations }) {
  const { date, bookings } = todaysData(reservations);

  if (!date || !bookings.length) {
    return (
      <Heading title="No bookings for today" />
    );
  }

  const title = `Booking for ${date}`;
  
  return (
    <div className={styles.container}>
      {/* TODO include, or replace heading with, logo */}
      <Heading title={title} />
      <Table
        bookings={bookings}
        setBookingFormState={setBookingFormState} />
      {formData && <FormContainer
        date={date}
        exitForm={() => { setBookingFormState(null); }}
        reservations={reservations}
        setReservations={setReservations}
        {...formData} />}
    </div>
  );
}

Layout.PropTypes = {
  formData: PropTypes.object.isRequired,
  reservations: PropTypes.array.isRequired,
  setBookingFormState: PropTypes.func.isRequired,
  setReservations: PropTypes.func.isRequired
};
