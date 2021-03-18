import {LOGIN_SUCCESS} from './actions';

export const actionLogin = (payload = null) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};
