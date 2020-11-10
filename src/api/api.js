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
    return instance.get(`profile/${userId ? userId : '2'}`);
  },
};

export const authApi = {
  me() {
    return instance.get('auth/me');
  },
};
