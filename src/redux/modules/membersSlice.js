

import { createSlice } from "@reduxjs/toolkit";

const initialState = "카리나";

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    selectedMem: (state, action) => {
      return (state = action.payload);
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { selectedMem } = membersSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default membersSlice.reducer;
