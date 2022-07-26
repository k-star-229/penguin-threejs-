import { DSTATE_LOADED, STATUS_UPDATED } from './types';

export const setDStateLoading = () => dispatch => {
  dispatch({
    type: DSTATE_LOADED
  });
};

export const setStatus = (status) => dispatch => {
  dispatch({
    type: STATUS_UPDATED,
    payload: { status }
  });
}