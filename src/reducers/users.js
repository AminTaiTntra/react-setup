import { SET_USERS } from '../actions/manageUsers';

const usersReducer = (
  action,
  users = { items: [], totalItemCount: 0, totalPages: 0 },
) => {
  switch (action.type) {
    case SET_USERS: {
      return action.payload;
    }
    default: {
      return users;
    }
  }
};

export default usersReducer;
