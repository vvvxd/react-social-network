import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { Redirect, withRouter } from 'react-router-dom';

class ProfileComponent extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getUserProfile(userId);
  }
  render() {
    if (this.props.isAuth === false) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth:state.auth.isAuth,
    profile: state.profilePage.profile,
  };
};

let WithUrlDataContainerComponent = withRouter(ProfileComponent);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
