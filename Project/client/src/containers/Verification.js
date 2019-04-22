import React from 'react';
import { connect } from 'react-redux';
import { signUpVerification } from '../actions';
import VerificationComponent from '../components/Client/Verification';

class Verification extends React.Component {
  onSubmit = (formValues) => {
    this.props.signUpVerification(formValues, this.props.match.params.id);
  }


  render() {
    return (
      <VerificationComponent
        errorMessage={this.props.errorMessage}
        onSubmit={this.onSubmit}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default connect(mapStateToProps, { signUpVerification })(Verification);