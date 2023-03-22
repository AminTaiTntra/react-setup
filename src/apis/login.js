import { post } from './client';

const login = (body) => {
   post('user/login', body);
};

export { login };
