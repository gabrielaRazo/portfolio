import * as dashboardActions from '../actions/dashboardActions';

const initialState = {
  isMenuOpen: false,
  selected: 'Home',
};

export default (state = initialState, action) => {
  switch (action.type) {
    //API ref
    case dashboardActions.OPEN_MENU_NAVBAR:
      return { ...state, isMenuOpen: action.isMenuOpen };

    case dashboardActions.CHANGE_SELECTED_VALUE:
      return { ...state, selected: action.selected };

    default:
      return state;
  }
};
