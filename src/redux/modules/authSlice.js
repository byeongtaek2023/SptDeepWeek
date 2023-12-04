import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//2개의 input
//(1) 이름 : 의미 크게 없음
//(2) 함수 
// export const __auth =  createAsyncThunk(
//   "AUTH_WAIT",
//   (payload, thunkAPI)=>{
//     //수행하고 싶은 동작 : 3초를 기다리게 할 예정
//     setTimeout(()=>{
//       thunkAPI.dispatch(auth(payload));
//     }, 3000) 
//   }
// );


const initialState = {
  userId: null, isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: (state, action) => {
      const data = action.payload;
      return { ...state, data ,isAuthenticated: true};
    },
  },
});

export const { auth } = authSlice.actions;
export default authSlice.reducer;
