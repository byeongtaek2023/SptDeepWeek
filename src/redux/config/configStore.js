

import { configureStore } from "@reduxjs/toolkit";
import membersSlice from 'redux/modules/membersSlice';
import rerenderSlice from 'redux/modules/rerenderSlice';

const store = configureStore({
  reducer: { membersSlice , rerenderSlice},
});

export default store;


