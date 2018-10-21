import React, { Component } from 'react';
import { auth } from '../firebase';

const INITIAL_STATE = {
  email: '',
  error: null
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email } = this.state;
    auth
      .doPasswordReset(email)
      .then(() => { this.setState({ ...INITIAL_STATE }) })
      .catch(error => { this.setState({ error }) });
    event.preventDefault();
  }
  render() {
    const { email, error } = this.state;
    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={email => this.setState({ email })}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">Reset My Password</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default PasswordForgetForm;
