import { CLOSE_TOGGLE_MENU } from "../actions/types";
const INITIAL_STATE = {
  toggleMenu: false
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case CLOSE_TOGGLE_MENU:
      console.log(actions);
      return { ...state, check: !state.toggleMenu };
    default:
      return state;
  }
};
