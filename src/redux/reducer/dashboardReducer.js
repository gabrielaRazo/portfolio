import * as dashboardActions from '../actions/dashboardActions';

const initialState = {
  isMenuOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    //API ref
    case dashboardActions.OPEN_MENU_NAVBAR:
      return { ...state, isMenuOpen: action.isMenuOpen };

    default:
      return state;
  }
};
