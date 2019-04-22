import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CompanyMenu from './CompanyMenu/CompanyMenu';

const styles = theme => ({
  //
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
});

class CompanyLayout extends React.Component {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  toggleDrawer = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CompanyMenu toggleDrawer={this.toggleDrawer} open={this.state.open}/>
        <main className={classes.content}>
          <Typography variant="h4" gutterBottom component="h2">
          {this.props.contentTitle}
          </Typography>
          {this.props.content}
        </main>
      </div>
    );
  }
}

CompanyLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompanyLayout);


