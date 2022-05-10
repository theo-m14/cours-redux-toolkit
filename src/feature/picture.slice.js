import { createSlice } from "@reduxjs/toolkit";

export const pictureSlice = createSlice({
  name: "picture",
  initialState: {
    picture: null,
  },
  reducers: {
    setPictureData: (state, action) => {
      state.picture = action.payload;
    },
  },
});

export const { setPictureData } = pictureSlice.actions;
export default pictureSlice.reducer;
