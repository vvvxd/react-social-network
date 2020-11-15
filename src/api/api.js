import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'b34f5dd5-022e-4271-8ecd-bf5e893c3b5a',
  },
});

export const usersAPI = {
  getUser(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`, {}).then((response) => response.data);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => response.data);
  },
  getProfile(userId) {
    return profileApi.getProfile(userId);
  },
};

export const profileApi = {
  getProfile(userId) {
    return instance.get(`profile/${userId ? userId : '12493'}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  },
};

export const authApi = {
  me() {
    return instance.get('auth/me');
  },
  login(email, password, rememberMe = false) {
    return instance.post('auth/login', { email, password, rememberMe });
  },
  logout() {
    return instance.delete('auth/login');
  },
};
