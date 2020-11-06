import { connect } from 'react-redux';
import {
  currentPageAC,
  followAC,
  setUsersAC,
  unFollowAC,
  totalCountAC,
  setIsFetchingAC,
} from '../../redux/user-reduser';
import axios from 'axios';
import React from 'react';

import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
class UsersApi extends React.Component {
  componentDidMount() {
    this.props.toggleIsFrtcching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      )
      .then(({ data }) => {
        this.props.toggleIsFrtcching(false);
        this.props.setUsers(data.items);
      });
  }

  onPageChanget = (page) => {
    this.props.setCurrentPage(page);
    this.props.toggleIsFrtcching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
      )
      .then(({ data }) => {
        this.props.toggleIsFrtcching(false);
        this.props.setUsers(data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            pagesCount={pagesCount}
            onPageChanget={this.onPageChanget}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
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
  };
};



const UsersContainer = connect(mapStateToProps, {
  follow: followAC,
  unfollow: unFollowAC,
  setUsers: setUsersAC,
  setCurrentPage: currentPageAC,
  setTotalUsersCount: totalCountAC,
  toggleIsFrtcching: setIsFetchingAC,
})(UsersApi);

export default UsersContainer;
