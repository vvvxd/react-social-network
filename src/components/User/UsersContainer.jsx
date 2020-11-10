import { connect } from 'react-redux';
import { getUsers, unFollowUser, setCurrentPage, followUser } from '../../redux/user-reduser';
import React from 'react';

import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersApi extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.props.getUsers(page, this.props.pageSize);
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            unFollowUser={this.props.unFollowUser}
            followUser={this.props.followUser}
            followingInProgress={this.props.followingInProgress}
            pagesCount={pagesCount}
            onPageChanget={this.onPageChanged}
            currentPage={this.props.currentPage}
            users={this.props.users}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUserCount: state.userPage.totalUserCount,
    currentPage: state.userPage.currentPage,
    isFetching: state.userPage.isFetching,
    followingInProgress: state.userPage.followingInProgress,
  };
};

const UsersContainer = connect(mapStateToProps, {
  setCurrentPage,
  getUsers,
  unFollowUser,
  followUser,
})(UsersApi);

export default UsersContainer;
