import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from './layout.jsx';

export default class LayoutContainer extends Component {
  constructor() {
    super();
    this.state = {
      formData: null,
    };
  }

  setBookingFormState = (formData) => {
    this.setState({ formData });
  };

  render() {
    const { formData, setReservations } = this.state;

    return (
      <Layout
        formData={formData}
        setBookingFormState={this.setBookingFormState}
        setReservations={setReservations}
        {...this.props} />
    );
  }
}

LayoutContainer.PropTypes = {
  reservations: PropTypes.array.isRequired,
  setReservations: PropTypes.func.isRequired
};
