import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: null,
  },
  reducers: {
    saveUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { saveUserDetails } = userSlice.actions;
export default userSlice.reducer;
