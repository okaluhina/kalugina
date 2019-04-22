import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import MoodOutlinedIcon from '@material-ui/icons/MoodOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import ClientBookingCard from '../Cards/ClientBookingCard';

const validate = (values) => {
  const errors = {};
  
  return errors;
}

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class ClientBookingList extends React.Component {
  onChange = (formValues) => {
    this.props.onChange(formValues);
  }
  
  renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => {
    return (
      <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      required
      fullWidth
      {...input}
      {...custom}
    />
  )}

  render() {
    const { classes } = this.props;
    return (
      <div>List</div>
    )
  }
}

ClientBookingList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'ClientBookingList',
  validate
})(withStyles(styles)(ClientBookingList));