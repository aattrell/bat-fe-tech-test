import React, { Component } from 'react';
import ErrorPage from './components/error-page/error-page.jsx';
import LayoutContainer from './components/layout/layout-container.jsx';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      error: null,
      isLoaded: false,
      reservations: null
    };
  }
  
  componentDidMount() {
    fetch('../bookings.json')
      .then(res => res.json())
      .then(
        (reservations) => {
          this.setState({
            isLoaded: true,
            reservations
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  setReservations = (reservations) => {
    // To persist the state (incase the user refreshes / reloads),
    // we would need to do a POST request here instead of updating state
    this.setState({ reservations });
  }
  
  render() {
    const { error, isLoaded, reservations } = this.state;

    if (error) {
      return <ErrorPage error={error} />;
    } else {
      return (
        <div>
          {isLoaded ?
            <LayoutContainer
              reservations={reservations}
              setReservations={this.setReservations} />
            : 'Loading...'}
        </div>
      );
    }
  }
}
