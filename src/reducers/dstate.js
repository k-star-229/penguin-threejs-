import { DSTATE_LOADED, STATUS_UPDATED, VIDEO_LOADED } from '../actions/types';

const initialState = {
  isLoading: true,
  isVideoLoaded: false,
  status: 0
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
    case VIDEO_LOADED:
      return {
        ...state,
        isLoading: false,
        isVideoLoaded: true,
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
