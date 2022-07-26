import { DSTATE_LOADED, STATUS_UPDATED } from '../actions/types';

const initialState = {
  isLoading: true,
  status: null
};

function dstateReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case DSTATE_LOADED:
      return {
        ...state,
        isLoading: false,
        status: null
      };
    case STATUS_UPDATED:
      return {
        ...state,
        status: payload
      };
    default:
      return state;
  }
}

export default dstateReducer;
