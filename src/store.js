import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./slice/newsSlice";

export const store = configureStore({
  reducer: {
    news: newsSlice,
  },
  devTools: true,
})
