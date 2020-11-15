import { profileApi, usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  postData: [
    { id: '1', message: 'Hi, how are you', liceCount: '5' },
    { id: '2', message: 'Its my first post', liceCount: '23' },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postData: [
          ...state.postData,
          {
            id: '3',
            message: action.payload.newPost,
            liceCount: '0',
          },
        ],
      };
    }
  
    case SET_STATUS: {
      return { ...state, status: action.payload.status };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    default:
      return state;
  }
};

export const addPostCreator = (payload) => ({
  type: ADD_POST,
  payload: {
    newPost: payload,
  },
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});



export const getUserProfile = (userId) => (dispath) => {
  usersAPI.getProfile(userId).then(({ data }) => {
    dispath(setUserProfile(data));
  });
};

export const setStatus = (status) => ({
  type: SET_STATUS,
  payload: {
    status,
  },
});

export const getStatus = (userId) => (dispath) => {
  profileApi.getStatus(userId).then(({ data }) => {
    dispath(setStatus(data));
  });
};

export const updateStatus = (status) => (dispath) => {
  profileApi.updateStatus().then(({ data }) => {
    if (data.resultCode === 0) {
      dispath(setStatus(status));
    }
  });
};

export default profileReducer;
