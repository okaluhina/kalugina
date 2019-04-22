import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import SignInComponent from '../components/SignIn';

class SignIn extends React.Component {
  onSubmit = (formValues) => {
    this.props.signIn(formValues);
  }

  render() {
    return (
      <SignInComponent
        onSubmit={this.onSubmit}
        errorMessage={this.props.errorMessage}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default connect(mapStateToProps, { signIn })(SignIn);