import React from 'react';
import { connect } from 'react-redux';
import { signUpCompanyVerification } from '../actions';

class CompanyVerification extends React.Component {
  componentDidMount() {
    this.props.signUpCompanyVerification(
      this.props.match.params.id,
      this.props.match.params.token,
    );
  }

  render() {
    return (
      <div>
        {
          this.props.errorMessage ?
          'Loading...' :
          this.props.errorMessage
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default connect(mapStateToProps, { signUpCompanyVerification })(CompanyVerification);