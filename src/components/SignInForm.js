import React from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import * as routes from './constants/routes';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
}

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;
    const { history } = this.props;
    auth
      .doSignInUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => { this.setState({ error }); });
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={event => this.handleChange(event)}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={event => this.handleChange(event)}
          type="password"
          placeholder="Password"
        />
        <button type="submit" disabled={isInvalid}>Sign In</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(SignInForm);