import { get, post, patch } from './client';

const addNewUser = (body) => {
   post('user/add', body);
};

const getUserList = (body) => {
  get('user/all', body);
};

const editUser = (id, body) => {
  patch(`user/edit/${id}`, body);
};

export { addNewUser, getUserList, editUser };
