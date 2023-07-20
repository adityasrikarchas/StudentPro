/* This file will be used at the time of dispatch */

export const PERFORM_LOGIN = () => {
  return {
    type: 'PERFORM_LOGIN',
  };
};

export const PERFORM_LOGOUT = () => {
  return {
    type: 'PERFORM_LOGOUT',
  };
};

export const TOGGLE_LAYOUT = (state) => {
  return {
    type: 'TOGGLE_LAYOUT',
    payload: state,
  };
};

export const START_TEST = () => {
  return {
    type: 'START_TEST',
  }
}

export const END_TEST = () => {
  return {
    type: 'END_TEST',
  }
}