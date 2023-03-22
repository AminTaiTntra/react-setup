import {
  SET_SIDEBAR_COLLAPSE,
  SET_SIDEBAR_VISIBILITY,
} from '../actions/sidebar';

const sidebarReducer = (
  action,
  sidebar = { isCollapsed: false, isVisible: false },
) => {
  switch (action.type) {
    case SET_SIDEBAR_COLLAPSE: {
      return action.payload;
    }
    case SET_SIDEBAR_VISIBILITY: {
      return action.payload;
    }
    default: {
      return sidebar;
    }
  }
};

export default sidebarReducer;
