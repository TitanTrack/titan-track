import React, { Component } from 'react';
import GoogleButton from 'react-google-button';
import withAuth from '../hocs/withAuth';

class SigninForm extends Component {
  state = {
    isLoading: false
  }

  googleLogin = () => {
    this.setState({ isLoading: true });
    const { firebase, authError, auth } = this.props;
    return firebase
      .login({ provider: 'google' })
      .then(() => {
        this.setState({ isLoading: false });
        console.log('Login successful!', { auth });
        // this is where you can redirect to another route
      })
      .catch((error) => {
        this.setState({ isLoading: false })
        console.log('there was an error', error)
        console.log('error prop:', authError) // thanks to connect
      });
  }

  render () {
    return (
      <div>
        <span>Login Form</span>
        <GoogleButton onClick={this.googleLogin} />
      </div>
    );
  }
}

export default withAuth(SigninForm);
