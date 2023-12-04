// //데이터 가져오기
// export const __addPost = createAsyncThunk(
//     "AUTH_WAIT",
//     async (payload, thunkAPI) => {
//       try {
//         const response = await json.get("/letters");
//         console.log("respons", response);
//         //toolkint 제공 하는 API
//         //Promise => resolve(= 네트워크 요청이 성공한 경우 ) => dispatch 해주는 기능을 가진 api
//        return thunkAPI.fulfillWithValue(response.data);
//       } catch (error) {
//         console.error("error", error);
//         //toolkint 제공 하는 API
//         return thunkAPI.rejectWithValue(error);
//       }
//     }
//   );

// const initialState = {
//   newCard: [  {
//     id: "",
//     nickname: "",
//     content: "",
//     avatar: "",
//     writedTo: "",
//     createdAt: "",
//     userId: "",
//   },],
//   isLoading: false,
//   isError: false,
//   error: null,
// };


//   const rerenderSlice = createSlice({
//     name: "rerender",
//     initialState,
//     reducers: {
//       addPost: (state, action) => {
//         return [...state, action.payload];
//       },
//       deletePost: (state, action) => {
//         return state.filter((i) => i.id !== action.payload);
//       },
//       editPost: (state, action) => {
//         return state.map((state) =>
//           state.id === action.payload.id
//             ? { ...state, content: action.payload.content }
//             : state
//         );
//       },
//     },
//     extraReducers: {
//       [__addPost.pending]: (state, action) => {
//         // 아직 진행일 때
//         state.isLoading = true;
//         state.isError = false;
//       },
//       [__addPost.fulfilled]: (state, action) => {
//         console.log("fulfilled :", action);
//         state.isLoading = false;
//         state.isError = false;
//         state.newCard = action.payload;
//       },
  
//       [__addPost.rejected]: (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.error =action.payload;
//       },
//     },
//   });