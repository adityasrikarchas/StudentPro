// External Imports
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import { UpdateLoginStatus } from './reducers/loginLogout';

const Store = configureStore({
  reducer: {
    UpdateLoginStatus,
  },
});

export default Store;
