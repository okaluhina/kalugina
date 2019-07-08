import React from 'react';
import { connect } from 'react-redux';
import { signUpClient, googleAuth, githubAuth } from '../actions';
import ClientSignUpComponent from '../components/ClientSignUp/ClientSignUp';

class SignUp extends React.Component {
  onSubmit = async (formValues) => {
    await this.props.signUpClient(formValues);
  }

  onGoogleClick = async () => {
    await this.props.googleAuth()
  }

  onGithubClick = async () => {
    await this.props.githubAuth()
  }

  render() {
    return (
      <ClientSignUpComponent
        onSubmit={this.onSubmit}
        errorMessage={this.props.errorMessage}
        googleAuth={this.onGoogleClick}
        githubAuth={this.onGithubClick}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default connect(mapStateToProps, { signUpClient, googleAuth, githubAuth })(SignUp);