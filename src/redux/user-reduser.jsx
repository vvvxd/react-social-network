import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENS_PAGE = 'SET_CURRENS_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IS_PROGRESS = 'TOGGLE_FOLLOWING_IS_PROGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  totalUserCount: 70,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case TOGGLE_FOLLOWING_IS_PROGRESS:
      return {
        ...state,
        followingInProgress: action.payload.isFetching
          ? [...state.followingInProgress, action.payload.userid]
          : state.followingInProgress.filter((id) => id !== action.payload.userid),
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUserCount: action.payload,
      };
    case SET_CURRENS_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };
    default:
      return state;
  }
};

export const follow = (id) => ({ type: FOLLOW, userId: id });

export const setCurrentPage = (payload) => ({ type: SET_CURRENS_PAGE, payload });

export const unFollow = (id) => ({ type: UNFOLLOW, userId: id });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setIsFetching = (payload) => ({
  type: TOGGLE_IS_FETCHING,
  payload,
});

export const totalCountAC = (payload) => ({ type: SET_TOTAL_COUNT, payload });

export const toggleFollowingInProgress = (isFetching, userid) => ({
  type: TOGGLE_FOLLOWING_IS_PROGRESS,
  payload: {
    isFetching,
    userid,
  },
});

export const getUsers = (currentPage, pageSize) => (dispath) => {
  dispath(setIsFetching(true));
  usersAPI.getUser(currentPage, pageSize).then((data) => {
    dispath(setIsFetching(false));
    dispath(setUsers(data.items));
  });
};

export const followUser = (userId) => (dispath) => {
  dispath(toggleFollowingInProgress(true, userId));
  usersAPI.follow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispath(follow(userId));
    }
    dispath(toggleFollowingInProgress(false, userId));
  });
};
export const unFollowUser = (userId) => (dispath) => {
  dispath(toggleFollowingInProgress(true, userId));
  usersAPI.unfollow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispath(unFollow(userId));
    }
    dispath(toggleFollowingInProgress(false, userId));
  });
};

export default userReducer;
