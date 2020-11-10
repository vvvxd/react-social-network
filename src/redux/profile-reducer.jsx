import { usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  postData: [
    { id: '1', message: 'Hi, how are you', liceCount: '5' },
    { id: '2', message: 'Its my first post', liceCount: '23' },
  ],
  newPostText: '',
  profile: null,
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
            message: state.newPostText,
            liceCount: '0',
          },
        ],
        newPostText: '',
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newMessage };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const postChangeCreator = (newMessage) => ({
  type: UPDATE_NEW_POST_TEXT,
  newMessage: newMessage,
});

export const getUserProfile = (userId) => (dispath) => {
  usersAPI.getProfile(userId).then(({ data }) => {
    dispath(setUserProfile(data));
  });
};

export default profileReducer;
