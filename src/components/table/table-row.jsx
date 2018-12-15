import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TableRow extends Component {
  handleClick = () => {
    const { setBookingFormState, ...bookingData } = this.props;
    setBookingFormState(bookingData);
  }

  render() {
    const { firstName, lastName, partySize, seated, time, title } = this.props;

    return (
      <tr
        onClick={this.handleClick}>
        <td>
          {title} {firstName} {lastName}
        </td>
        <td>
          {time}
        </td>
        <td>
          {partySize}
        </td>
        <td>
          {seated ? 'Yes' : 'No'}
        </td>
      </tr>
    );
  }
}

TableRow.PropTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  partySize: PropTypes.number.isRequired,
  seated: PropTypes.bool.isRequired,
  setBookingFormState: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
