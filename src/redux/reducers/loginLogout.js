const initialState = {
  isLoggedIn: true,
};

export const UpdateLoginStatus = (state = initialState, action) => {
  switch (action.type) {
    case 'PERFORM_LOGIN':
      return (state.isLoggedIn = true);
    case 'PERFORM_LOGOUT':
      return (state.isLoggedIn = false);
    default:
      return state;
  }
};