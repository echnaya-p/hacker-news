import { configureStore } from '@reduxjs/toolkit';
import storiesReducer from './slice/storiesSlice';
import commentsReducer from './slice/commentsSlice';

const store = configureStore({
  reducer: {
    stories: storiesReducer,
    comments: commentsReducer,
  },
  devTools: true,
});

export default store;
