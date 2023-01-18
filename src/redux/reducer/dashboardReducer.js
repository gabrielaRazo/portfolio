import * as dashboardActions from '../actions/dashboardActions';

const initialState = {
  isMenuOpen: false,
  selected: 'Home',
  height: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    //API ref
    case dashboardActions.OPEN_MENU_NAVBAR:
      return { ...state, isMenuOpen: action.isMenuOpen };

    case dashboardActions.CHANGE_SELECTED_VALUE:
      return { ...state, selected: action.selected };

    case dashboardActions.CHANGE_HEIGHT_VALUE:
      return { ...state, height: action.height };

    default:
      return state;
  }
};
