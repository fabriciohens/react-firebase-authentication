import React, { Component } from 'react';
import { auth } from '../firebase';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { passwordOne } = this.state;
    auth
      .doPasswordUpdate(passwordOne)
      .then(() => { this.setState({ ...INITIAL_STATE }) })
      .catch(error => this.setState({ error }));
    event.preventDefault();
  }
  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne === '' || passwordOne !== passwordTwo;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={passwordOne}
          onChange={passwordOne => this.setState({ passwordOne })}
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={passwordTwo => this.setState({ passwordTwo })}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">Reset My Password</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default PasswordChangeForm;
