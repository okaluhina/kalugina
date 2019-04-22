import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import pure from 'recompose/pure';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: theme.palette.primary.light,
    padding: `${theme.spacing.unit} ${theme.spacing.unit}`,
  },
  footerItem: {
    marginTop: 20,
    marginBottom: 20,
    [theme.breakpoints.up('sm')]: {
      marginTop: 25,
      marginBottom: 25,
    },
    color: theme.palette.common.white,
  },
  footerTypography: {
    color: theme.palette.secondary.main,
  }
});

function Footer(props) {
  const { classes } = props;
  return (
    <Typography component="footer" className={classes.root}>
          <Link href="/terms" className={classes.footerItem}>Terms of Use</Link>
          <Link href="/privacy" className={classes.footerItem}>Privacy Policy</Link>
          <Typography className={classNames(classes.footerItem, classes.footerTypography)}> 
            © 2019 Broom
          </Typography>
    </Typography>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  pure,
  withStyles(styles),
)(Footer);