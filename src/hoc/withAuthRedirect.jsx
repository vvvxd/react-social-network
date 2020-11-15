import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToRedirectProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

function withAuthRedirect(Component) {
  function RedirectComponent(props) {
    if (props.isAuth === false) {
      return <Redirect to="/login" />;
    }
    return <Component {...props} />;
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToRedirectProps)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}

export default withAuthRedirect;
