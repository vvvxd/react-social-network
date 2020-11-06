import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile} from '../../redux/profile-reducer';


class ProfileComponent extends React.Component {
  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(({ data }) => {
      this.props.setUserProfile(data);
    });
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile ={this.props.profile}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};
export default connect(mapStateToProps,{setUserProfile})(ProfileComponent);
