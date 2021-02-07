import { SHOW_APP } from "../constants";

const initialeState = {
  showApp: false
};


const showAppReducer = (state = initialeState, action) => {
  switch (action.type) {
    case SHOW_APP:
      return {
        ...state,
        showApp: true
      };

    default:
      return state;
  }
};

export default showAppReducer;
