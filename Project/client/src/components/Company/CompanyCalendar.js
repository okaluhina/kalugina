import React from 'react';
import Grid from '@material-ui/core/Grid';
import CompanyLayout from './CompanyLayout';
//спросить у куратора

class CompanyCalendar extends React.Component {
  renderCell = () => {
    return (
      
        <Grid item xs={12} sm={6} ></Grid>
    )
  }

  renderCalender = () => {
    return (
      //className={classes.container}
      <Grid container spacing={8} ></Grid>
    )
  }

  render() {
    return <CompanyLayout contentTitle='Calendar' content={this.renderCalender()} />
  }
}

export default CompanyCalendar;