//초기 상태값 (state)
import { data } from "shared/data";

const ADD_POST = "rerender/ADD_POST";
const DELETE_POST = "rerender/DELETE_POST";
const EDIT_POST = "rerender/EDIT_POST";


export const addPost = (payload) => {
  return { type: ADD_POST, payload };
};
export const deletePost = (payload) => {
  return { type: DELETE_POST, payload };
};
export const editPost = (payload) => {
  return { type: EDIT_POST, payload };
};


const initialState = [...data];

const rerender = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];

    case DELETE_POST:
      return state.filter((i) => i.id !== action.payload);

    case EDIT_POST:
      return state
        .map((state) =>
        state.id === action.payload.id
            ? { ...state, content: action.payload.content }
            : state
        );

  
    default:
      return state;
  }
};

export default rerender;
