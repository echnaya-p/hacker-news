import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getStoriesIds} from "../api/getStoriesIds";
import {getStory} from "../api/getStory";

export const fetchStories = createAsyncThunk(
  'stories/fetchStories',
  async (_, {rejectWithValue}) => {
    const storiesIds = await getStoriesIds();
    let stories = [];

    try {
      stories = await Promise.all(
        storiesIds.map(async (id) => getStory(id))
      );
    } catch (e) {
      console.log(e);
      return rejectWithValue(e?.response?.data)
    }

    return stories;
  }
);

export const storiesSlice = createSlice({
  name: 'stories',
  initialState: {
    ids: [],
    storiesById: {},
    request: {
      isLoading: false,
      error: null,
    },
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStories.pending, (state, action) => {
        state.request.isLoading = true;
      })
      .addCase(fetchStories.rejected, (state, action) => {
        state.request.isLoading = false;
        state.request.error = action.payload;
      })
      .addCase(fetchStories.fulfilled, (state, action) => {
        const stories = action.payload;
        const ids = [];

        stories.forEach((story) => {
          if (story) {
            const { id, title, by, time, score, url, descendants, kids } = story;

            state.storiesById[id] = { id, title, by, time, score, url, descendants, kids };
            ids.push(id);
          }
        });
        state.ids = ids;
        state.request.isLoading = false;
      })
  },
});

// export const {  } = storiesSlice.actions;

export default storiesSlice.reducer;
