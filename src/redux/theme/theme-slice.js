import { createSlice } from "@reduxjs/toolkit";

const darkTheme = createSlice({
  name: "theme",
  initialState: false,
  reducers: {
    toggleTheme: (state) => !state,
  },
});

export const { toggleTheme } = darkTheme.actions;
export default darkTheme.reducer;