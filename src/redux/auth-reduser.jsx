import { stopSubmit } from 'redux-form';
import { authApi } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, email, login, isAuth },
});

export const getAuthUserData = () => (dispath) => {
  return authApi.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispath(setAuthUserData(id, login, email, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispath) => {
  authApi.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispath(getAuthUserData());
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'error';
      dispath(stopSubmit('Login', { _error: message }));
    }
  });
};

export const logout = () => (dispath) => {
  authApi.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispath(getAuthUserData());
      dispath(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReducer;
