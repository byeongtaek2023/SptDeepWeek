import { configureStore } from "@reduxjs/toolkit";
import membersSlice from "redux/modules/membersSlice";
import rerenderSlice from "redux/modules/rerenderSlice";
import authSlice from "redux/modules/authSlice";


const store = configureStore({
  reducer: { membersSlice, rerenderSlice, authSlice},
});

export default store;
