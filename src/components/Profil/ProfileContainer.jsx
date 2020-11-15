import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, updateStatus, getStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileComponent extends React.Component {
  componentDidMount() {
    console.log(this.props.userId);
    let userId = this.props.userId;
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect,
)(ProfileComponent);
