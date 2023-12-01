import { createSlice } from "@reduxjs/toolkit";

const initialState = {

};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: (state, action) => {
      const data = action.payload;
      return { ...state, data };
    },
  },
});

export const { auth } = authSlice.actions;
export default authSlice.reducer;
