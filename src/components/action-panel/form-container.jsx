import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Summary from './summary.jsx';
import Seated from './seated.jsx';
import Comments from './comments.jsx';

export default class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      cancelled: false,
      seated: false
    };
  }

  handleChange = (event) => {
    const value = event.target.value;

    if (value === 'seated') {
      this.setState({
        cancelled: false,
        seated: true
      });
    } else if (value === 'cancelled') {
      this.setState({
        cancelled: true,
        seated: false
      });
    } else {
      this.setState({
        cancelled: false,
        seated: false
      }); 
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { date, firstName, lastName, reservations, setReservations, time } = this.props;
    const { cancelled, seated } = this.state;
    const today = reservations.filter(reservation => {
      return reservation.date === date;
    })[0].bookings;
    const todayIndex = reservations.findIndex(reservation => reservation.date === date);
    const bookingIndex = today.findIndex(booking => booking.firstName === firstName && booking.lastName === lastName && booking.time === time);
    const updatedObj = { ...today[bookingIndex], cancelled, seated };
    const updatedReservations = [
      ...reservations.slice(0, todayIndex),
      {
        date: date,
        bookings: [
          ...today.slice(0, bookingIndex),
          updatedObj,
          ...today.slice(bookingIndex + 1)
        ]
      },
      ...reservations.slice(todayIndex + 1)
    ];

    setReservations(updatedReservations);

    this.props.exitForm();
  }
  
  render() {
    const { cancelled, notes, seated } = this.state;
    // TO DO: adding a cross to allow exit without form submission
    // onClick would be the exitForm function

    return (
      <form
        onSubmit={this.handleSubmit}>
        <Summary {...this.props} />
        <Seated
          cancelled={cancelled}
          onChange={this.handleChange}
          seated={seated} />
        <Comments notes={notes} />
        <button type="submit">
          Submit
        </button>
      </form>
    );
  }
}

FormContainer.PropTypes = {
  date: PropTypes.string.isRequired,
  exitForm: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  partySize: PropTypes.number.isRequired,
  reservations: PropTypes.array.isRequired,
  setReservations: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
