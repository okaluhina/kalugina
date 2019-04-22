import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'email',
    'password'
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  });

  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
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
});

const ClientSignUpLink = props => <RouterLink to='/client/signUp' {...props} />;


/* <FormControl margin="normal" required fullWidth>
  <InputLabel htmlFor={custom.htmlFor}>{label}</InputLabel>
  <Input
    id={custom.id}
    name={custom.name}
    autoComplete={custom.autoComplete}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
</FormControl> */
//helperText={touched && error}
// name="firstName"
// component={renderFormControl}
// htmlFor="email"
// label='Email Address'
// id="email"
// name="email"
// autoComplete="email"
// autoFocus

class SignIn extends React.Component {
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) =>{
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="email"
            component={this.renderTextField}
            label='Email Address'
            id="email"
            autoComplete="email"
            autoFocus
          />
          <Field
            name="password"
            component={this.renderTextField}
            label='Password'
            id="password"
            autoComplete="current-password"
            type="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>
          {this.props.errorMessage ?
            <Typography component="h2" variant="body2">
              {this.props.errorMessage}
            </Typography> 
            : null}
          <div className={classes.social}>
          <Typography component="h2" variant="body2">
            Log in with another account:
          </Typography>
          <div className={classes.buttonContainer}>
            <Button variant="contained" color="primary" className={classes.button}>
              Facebook
            </Button>
            <Button variant="contained" color="primary" className={classes.button}>
              Google
            </Button>
          </div>
        </div>
        <Link
          color="inherit"
          variant="body2"
          component={ClientSignUpLink}
          block
        >
          {'Not a member yet? Sign up'}
          </Link>
          <Link
          color="inherit"
          variant="body2"
          component={ClientSignUpLink}
          block
        >
          {'I forgot my password'}
          </Link>
        </form>
      </Paper>
    </main>
    )
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'SignIn',
  validate
})(withStyles(styles)(SignIn));