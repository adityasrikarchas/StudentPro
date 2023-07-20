const initialState = {
    isTestStarted: false,
};

export const UpdateTestStatus = (state = initialState, action) => {
    switch(action.type) {
        case 'START_TEST': return (state.isTestStarted = true);
        case 'END_TEST': return (state.isTestStarted = false);
        default: return state;
    }
}