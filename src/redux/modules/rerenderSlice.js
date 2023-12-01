//초기 상태값 (state)
import { createSlice } from '@reduxjs/toolkit';
import { data } from "shared/data";
const initialState = [...data];

const rerenderSlice = createSlice({
  name : "rerender",
  initialState,
  reducers: {
    addPost : (state,action) =>{
      return [...state, action.payload];
    },
    deletePost : (state,action) =>{
      return state.filter((i) => i.id !== action.payload);
    },
    editPost : (state,action) =>{
      return state
              .map((state) =>
              state.id === action.payload.id
                  ? { ...state, content: action.payload.content }
                  : state
              );
      
    },

  }
})

export const {addPost, deletePost, editPost} = rerenderSlice.actions;
export default rerenderSlice.reducer;


