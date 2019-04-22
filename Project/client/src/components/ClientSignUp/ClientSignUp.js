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

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'username',
    'email', 
    'phone',
    'password',
    'passwordConfirm'
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  });

  if (values.username) {
    if (values.username.length < 2 ||
      values.username.length > 30) {
        errors.username = 'The username must be between 2 and 30 characters.'
      }
  };

  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address.'
  };

  if (
    values.password &&
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(values.password)
  ) {
    errors.password = 'The password must contain at least 1 lowercase, uppercase, and numeric character.'
  };

  if (values.passwordConfirm &&
    values.password !== values.passwordConfirm
    ) {
      errors.passwordConfirm = 'Passwords do not match.'
    }
  
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
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  social: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 2*theme.spacing.unit,
  },
  buttonContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '45%', // Fix IE 11 issue.
  },
  icon: {
    marginRight: theme.spacing.unit,
  }
});

class SignUp extends React.Component {
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
        <Avatar className={classes.avatar}>
          <MoodOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="username"
            component={this.renderTextField}
            label='Username'
            id="username"
            autoComplete="username"
            autoFocus
          />
          <Field
            name="email"
            component={this.renderTextField}
            label='Email Address'
            id="email"
            autoComplete="email"
          />
          <Field
            name="phone"
            component={this.renderTextField}
            label='Phone'
            id="phone"
            autoComplete="tel"
          />
          <Field
            name="password"
            component={this.renderTextField}
            label='Password'
            id="password"
            type="password"
          />
          <Field
            name="passwordConfirm"
            component={this.renderTextField}
            label='Password Confirmation'
            id="passwordConfirm"
            type="password"
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
        <div className={classes.social}>
          <Typography component="h2" variant="body2">
            Or, use another account:
          </Typography>
          <div className={classes.buttonContainer}>
            <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.props.googleAuth}
            >
              <i className={classNames("fab fa-google", classes.icon)}></i>
              Google
            </Button>
          </div>
        </div>
      </Paper>
    </main>
    )
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'SignUp',
  validate
})(withStyles(styles)(SignUp));
