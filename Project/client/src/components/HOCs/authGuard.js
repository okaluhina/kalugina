import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (OriginalComponent, role) => {
  class MixedComponent extends Component {

    checkAuth() {
      if (!this.props.isAuth && !this.props.jwtToken) {
        this.props.history.push('/');
      } else if(this.props.role !== role ) {
        this.props.history.push('/');
      }
    }

    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    render() {
      return <OriginalComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      isAuth: state.auth.isAuthenticated,
      jwtToken: state.auth.token,
      role: state.auth.role
    }
  }

  return connect(mapStateToProps)(MixedComponent);
};
