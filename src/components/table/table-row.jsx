import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './table-row.css';

export default class TableRow extends Component {
  handleClick = () => {
    const { setBookingFormState, ...bookingData } = this.props;
    setBookingFormState(bookingData);
  }

  handleKeyDown = (event) => {
    const enterKeyPress = event.key === 'Enter';
    const spaceBarPress = event.key === 'Space' || event.key === ' ';

    if (enterKeyPress || spaceBarPress) {
      const { setBookingFormState, ...bookingData } = this.props;
      setBookingFormState(bookingData);
    }
  }

  render() {
    const { cancelled, firstName, lastName, partySize, seated, time, title } = this.props;
    const cancelledSyles = cancelled ? styles.cancelled : null;
    
    return (
      <tr
        className={`${styles.row} ${cancelledSyles}`}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        role="button"
        tabIndex="0">
        <td
          className={styles.tableCell}>
          {title} {firstName} {lastName}
        </td>
        <td
          className={styles.tableCell}>
          {time}
        </td>
        <td
          className={styles.tableCell}>
          {partySize}
        </td>
        <td
          className={styles.tableCell}>
          {seated ? 'Yes' : 'No'}
        </td>
      </tr>
    );
  }
}

TableRow.PropTypes = {
  cancelled: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  partySize: PropTypes.number.isRequired,
  seated: PropTypes.bool.isRequired,
  setBookingFormState: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
