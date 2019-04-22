import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';

const validate = (values) => {
  const errors = {};

  if (!values.code) { errors.code = 'required'}

  if (values.code && values.code.length !== 6) {
    errors.code = 'The code must be between 6 characters.'
  };
  
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

class Verification extends React.Component {
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
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
      <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
      <Typography component="h1" variant="h5">
          Enter verification code:
        </Typography>
        <form
          className={classes.form}
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="code"
            component={this.renderTextField}
            label='Enter verification code:'
            id="code"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign up
          </Button>
          {this.props.errorMessage ?
            <Typography component="h2" variant="body2">
              {this.props.errorMessage}
            </Typography> 
          : null}        
        </form>
      </Paper>
    </main>
    )
  }
}

Verification.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'Verification',
  validate
})(withStyles(styles)(Verification));
