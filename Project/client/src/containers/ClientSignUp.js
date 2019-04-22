import React from 'react';
import { connect } from 'react-redux';
import { signUpClient, googleAuth } from '../actions';
import ClientSignUpComponent from '../components/ClientSignUp/ClientSignUp';

class SignUp extends React.Component {
  onSubmit = async (formValues) => {
    await this.props.signUpClient(formValues);
  }

  onGoogleClick = async () => {
    await this.props.googleAuth()
  }

  render() {
    return (
      <ClientSignUpComponent
        onSubmit={this.onSubmit}
        errorMessage={this.props.errorMessage}
        googleAuth={this.onGoogleClick}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default connect(mapStateToProps, { signUpClient, googleAuth })(SignUp);