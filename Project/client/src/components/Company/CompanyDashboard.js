import React from 'react';
import CompanyBookingCard from '../Cards/CompanyBookingCard';
import CompanyLayout from './CompanyLayout';

class CompanyDashboard extends React.Component {
  renderBookingList = () => {
    return (
      <div>
        <CompanyBookingCard />
      </div>
    )
  }

  render() {
    return <CompanyLayout contentTitle='Dashboard' content={this.renderBookingList()} />
  }
}

export default CompanyDashboard;


