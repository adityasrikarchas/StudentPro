const initialState = {
    visible: true,
  };
  
  export const UpdateLayoutVisibility = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_LAYOUT':
        return { visible: action.payload };
      default:
        return state;
    }
  };