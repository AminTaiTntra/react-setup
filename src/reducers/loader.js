import { SET_LOADER_COUNT } from '../actions/loader';

const loaderReducer = (action, loaderCount = 0) => {
  switch (action.type) {
    case SET_LOADER_COUNT: {
      return action.payload;
    }
    default: {
      return loaderCount;
    }
  }
};

export default loaderReducer;
