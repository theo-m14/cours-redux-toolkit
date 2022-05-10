import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const pictureSlice = createSlice({
  name: "picture",
  initialState: {
    picture: null,
  },
  reducers: {
    setPictureData: (state, action) => {
      state.picture = action.payload;
    },
    addPictureData: (state, action) => {
      state.picture.push(action.payload);
    },
    deletePicture: (state, action) => {
      state.picture = state.picture.filter(
        (picture) => picture.id !== action.payload
      );
    },
    editPicture: (state, action) => {
      state.picture = state.picture.map((picture) => {
        if (picture.id === action.payload.id) {
          return { ...picture, artist: action.payload.artist };
        } else {
          return picture;
        }
      });
    },
  },
});

export const { setPictureData, addPictureData, deletePicture, editPicture } =
  pictureSlice.actions;
export default pictureSlice.reducer;
