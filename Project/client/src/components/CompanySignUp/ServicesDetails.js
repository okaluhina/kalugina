import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  // root: {
  //   display: 'flex',
  // },
  // formControl: {
  //   margin: theme.spacing.unit * 3,
  // },
  // textField: {
  //   marginLeft: theme.spacing.unit,
  //   marginRight: theme.spacing.unit,
  //   width: 200,
  // },
  paper: {
    // padding: theme.spacing.unit,
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
    // whiteSpace: 'nowrap',
    // marginBottom: theme.spacing.unit,
  },
});

class CheckboxesGroup extends React.Component {
  state = {
    gilad: true,
    jason: false,
    antoine: false,
    age: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  renderCleaningList = () => {
    const cleaningTypes = ['basic', 'spring', 'construction', 'office', 'industrial'];
    return cleaningTypes.map(type => {
      return (
        <Grid container spacing={24}>
        <Grid item xs={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.gilad}
                onChange={this.handleChange('gilad')}
                value="gilad" />
            }
            label={type}
          />
        </Grid>
        <Grid item xs={2}>
        <TextField
            id="standard-number"
            value={this.state.age}
            onChange={this.handleChange('age')}
            type="number"
          />
        </Grid>
        <Grid item xs={2}>
        <TextField
            id="standard-number"
            value={this.state.age}
            onChange={this.handleChange('age')}
            type="number"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="standard-number"
            value={this.state.age}
            onChange={this.handleChange('age')}
            type="number"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="standard-number"
            value={this.state.age}
            onChange={this.handleChange('age')}
            type="number"
          />
        </Grid>
      </Grid>
      )
    })
  }

  renderDryCleaningList() {
    const cleaningTypes = ['carpet', 'furniture'];
    return cleaningTypes.map(type => {
      return (
        <Grid container spacing={24}>
        <Grid item xs={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.gilad}
                onChange={this.handleChange('gilad')}
                value="gilad" />
            }
            label={type}
          />
        </Grid>
        <Grid item xs={2}>
        <TextField
            id="standard-number"
            value={this.state.age}
            onChange={this.handleChange('age')}
            type="number"
          />
        </Grid>
      </Grid>
      )
    }) 
  }

  renderPoolCleaningList() {
    const cleaningTypes = ['basic', 'spring'];
    return cleaningTypes.map(type => {
      return (
        <Grid container spacing={24}>
        <Grid item xs={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.gilad}
                onChange={this.handleChange('gilad')}
                value="gilad" />
            }
            label={type}
          />
        </Grid>
        <Grid item xs={2}>
        <TextField
            id="standard-number"
            value={this.state.age}
            onChange={this.handleChange('age')}
            type="number"
          />
        </Grid>
      </Grid>
      )
    }) 
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <Typography component="h2" variant="h6">
        Cleaning
      </Typography>
        {this.renderCleaningList()}
        <Typography component="h2" variant="h6">
        Dry Cleaning
      </Typography>
        {this.renderDryCleaningList()}
        <Typography component="h2" variant="h6">
        Pool Cleaning
      </Typography>
        {this.renderPoolCleaningList()}
      </div>
      
    );
  }
}

CheckboxesGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxesGroup);
