import { configureStore } from "@reduxjs/toolkit";
import storiesReducer from "./slice/storiesSlice";

export const store = configureStore({
  reducer: {
    stories: storiesReducer,
  },
  devTools: true,
})
