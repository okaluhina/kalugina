import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
});

class WorkingHours extends React.Component {
  renderWorkingHoursList = () => {
    const weekDays = ['Sunday', 'Monday', 'Tuesday',
      'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekDays.map(day => {
      return (
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <Typography component="body2" variant="body2">
              {day}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="time"
              type="time"
              defaultValue="08:00"
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="time"
              type="time"
              defaultValue="18:00"
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <Switch
              checked={false}
              value="checkedA"
            />
          </Grid>
        </Grid>
      )
    })
  }

  render() {
    return (
      <>
      <Grid container spacing={24}>
        <Grid item xs={3}>
          <Typography component="body2" variant="body2">
            Day of the week
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography component="body2" variant="body2">
            Start hours
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography component="body2" variant="body2">
            End hours
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography component="body2" variant="body2">
            Day off
          </Typography>
        </Grid>
      </Grid>
        {this.renderWorkingHoursList()}
      </>
    )
  }
}

WorkingHours.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkingHours);
