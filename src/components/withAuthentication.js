import React from 'react';
import { firebase } from '../firebase';
import { connect } from 'react-redux';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: null
      }
    }
    componentDidMount() {
      const { onSetAuthUser } = this.props;
      firebase.auth.onAuthStateChanged(authUser => {
        onSetAuthUser(authUser ? authUser : null);
      })
    }
    render() {
      return (<Component {...this.props} />);
    }
  }
  const mapDispatchToProps = dispatch => ({
    onSetAuthUser: authUser => dispatch({ type: 'AUTH_USER_SET', authUser })
  });
  return connect(null, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;
