import { get, put, post } from './client';

const getProfile = (body) => {
   get('user/me', body);
};

const updateProfile = (id, body) => {
  put(`user/profileupdate/${id}`, body);
};

const changePassword = (id, body) => {
  post(`user/passwordchange/${id}`, body);
};

export { getProfile, updateProfile, changePassword };
