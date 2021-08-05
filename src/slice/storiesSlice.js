import { createSlice } from "@reduxjs/toolkit";

export const storiesSlice = createSlice({
  name: 'stories',
  initialState: {
    ids: [],
    storiesById: {},
  },
  reducers: {
    updateListOfStories: (state, action) => {
      state.ids = action.payload;
    },

    addNewStory: (state, action) => {
      const { id, title, by, time, score } = action.payload;

      state.storiesById[id] = { id, title, by, time, score }
    }
  }
});

export const { updateListOfStories, addNewStory } = storiesSlice.actions;

export default storiesSlice.reducer;
