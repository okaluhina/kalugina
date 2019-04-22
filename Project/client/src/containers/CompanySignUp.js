import React from 'react';
import { connect } from 'react-redux';
//import { SignUp } from '../../actions';
import { exampleAction } from '../actions';
import CompanySignUpComponent from '../components/CompanySignUp/CompanySignUp';

class CompanySignUp extends React.Component {
  onSubmit = (formValues) => {
    this.props.exampleAction(formValues);
  }


  render() {
    return (
      <CompanySignUpComponent onSubmit={this.onSubmit} />
    )
  }
}

export default connect(null, { exampleAction })(CompanySignUp);