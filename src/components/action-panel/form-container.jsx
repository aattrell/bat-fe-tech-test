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
    // TO DO: we need to update the json so the state is persisted
    this.props.exitForm();
  }
  
  render() {
    const { cancelled, notes, seated } = this.state;
    // TO DO: adding a cross to allow exit without form submission

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
  exitForm: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  partySize: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
