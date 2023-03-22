import { get } from './client';

const getDashBoardDetails = (body) => {
   get('company/get-dashboard-counts', body);
};

export { getDashBoardDetails };
