import React from 'react';
import ClientBookingCard from '../Cards/ClientBookingCard';
import CompanyBookingCard from '../Cards/CompanyBookingCard';
import ClientLayout from './ClientLayout';

class ClientDashboard extends React.Component {
  renderBookingList = () => {
    return (
      <div>
        <ClientBookingCard />
        <CompanyBookingCard />
      </div>
    )
  }

  render() {
    return <ClientLayout contentTitle='Dashboard' content={this.renderBookingList()} />
  }
}

export default ClientDashboard;
