import { DSTATE_LOADED, STATUS_UPDATED, VIDEO_LOADED } from './types';

export const setDStateLoading = () => dispatch => {
  dispatch({
    type: DSTATE_LOADED
  });
};

export const setVideoLoading = () => dispatch => {
  dispatch({
    type: VIDEO_LOADED
  });
};

export const setStatus = (status) => dispatch => {
  dispatch({
    type: STATUS_UPDATED,
    payload: { status }
  });
}