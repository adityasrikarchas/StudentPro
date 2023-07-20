// External Imports
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import { UpdateLoginStatus } from './reducers/loginLogout';
import { UpdateLayoutVisibility } from './reducers/layoutToggler';
import { UpdateTestStatus } from "./reducers/communicationTest";

const Store = configureStore({
  reducer: {
    UpdateLoginStatus,
    UpdateLayoutVisibility,
    UpdateTestStatus
  },
});

export default Store;