const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENS_PAGE = 'SET_CURRENS_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING';

let initialState = {
  users: [],
  pageSize: 5,
  totalUserCount: 70,
  currentPage: 1,
  isFetching: false,
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
    case TOGLE_IS_FETCHING:
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

export const followAC = (id) => ({ type: FOLLOW, userId: id });

export const currentPageAC = (payload) => ({ type: SET_CURRENS_PAGE, payload });

export const unFollowAC = (id) => ({ type: UNFOLLOW, userId: id });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export const setIsFetchingAC = (payload) => ({ type: TOGLE_IS_FETCHING, payload });

export const totalCountAC = (payload) => ({ type: SET_TOTAL_COUNT, payload });

export default userReducer;
