import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { signOut } from '../actions';

const styles = theme => ({
  root: {
    boxShadow: 'none',
  },
  title: {
    fontSize: 24,
  },
  placeholder: {
    height: 64,
    [theme.breakpoints.up('sm')]: {
      height: 70,
    },
  },
  toolbar: {
    justifyContent: 'space-between',
    textAlign: 'center'
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  link: {
    fontSize: 16,
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
    marginLeft: theme.spacing.unit * 3,
  },
  button: {
    margin: theme.spacing.unit,
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
});

const PromoLink = props => <RouterLink to='/' {...props} />
const ClientSignUpLink = props => <RouterLink to='/client/signUp' {...props} />
const CompanySignUpLink = props => <RouterLink to='/company/signUp' {...props} />
const SignInLink = props => <RouterLink to='/signIn' {...props} />

class Header extends React.Component {
  signOut = () => {
    this.props.signOut();
  }

  renderRightAppBar = () => {
    const { isAuth, role } = this.props;

    if (!isAuth) {
      return (
        <>
          <Link
            variant="h6"
            underline="none"
            className={this.props.classes.link}
            component={CompanySignUpLink}
          >
            {'for companies'}
          </Link>
          <Link
            color="inherit"
            variant="h6"
            underline="none"
            className={this.props.classes.link}
            component={ClientSignUpLink}
          >
            {'Sign Up'}
          </Link>
          <Link
            variant="h6"
            underline="none"
            className={this.props.classes.link}
            component={SignInLink}
          >
            {'Sign In'}
          </Link>
        </>
      )
    } else if(role === 'client') {
      return (
        <Link
          variant="h6"
          underline="none"
          className={this.props.classes.link}
          component={PromoLink}
          onClick={this.signOut}
        >
          {'sign out'}
        </Link>
      )
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" className={classes.root}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.left} />
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              className={classes.title}
              component={PromoLink}
            >
              <i className="fas fa-broom"></i>
              {' broom'}
            </Link>
            <div className={classes.right}>
              {this.renderRightAppBar()}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
    role: state.auth.role
  }
}

export default connect(
  mapStateToProps,
  { signOut })(withStyles(styles)(Header));
