import { SET_DASHBOARD_DETAILS } from '../actions/dashboard';

const dashboardReducer = (
  action,
  dashboardDetails = {
    entities: 0,
    urls: 0,
    datapoints: 0,
  },
) => {
  switch (action.type) {
    case SET_DASHBOARD_DETAILS: {
      return action.payload;
    }
    default: {
      return dashboardDetails;
    }
  }
};

export default dashboardReducer;
