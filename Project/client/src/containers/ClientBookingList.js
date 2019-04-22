import React from 'react';
import { connect } from 'react-redux';
import { fetchBookings } from '../actions';
import ClientBookingListComponent from '../components/Client/ClientBookingList';

class ClientBookingList extends React.Component {
  async componentDidMount() {
    await this.props.fetchBookings();
  }

  onChange = async (formValues) => {
    await this.props.fetchBookins(formValues);
  }

  render() {
    return (
      <ClientBookingListComponent
        onChange={this.onChange}
        bookings={this.props.bookings}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    //Object.values(state.bookings),
    bookingList: state.bookings
  }
}

export default connect(mapStateToProps, { fetchBookings })(ClientBookingList);