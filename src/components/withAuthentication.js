import React from 'react';
import { firebase } from '../firebase';
import AuthUserContext from './AuthUserContext';

const withAuthentication = Component =>
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: null
      }
    }
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        this.setState({ authUser: authUser ? authUser : null });
      })
    }
    render() {
      const { authUser } = this.state;
      return (
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

export default withAuthentication;
