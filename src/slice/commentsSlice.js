import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getComment} from "../api/getComment";

export const fetchComment = createAsyncThunk(
  'comments/fetchComment',
  async (id, {rejectWithValue}) => {
    let comment = {};

    try {
      comment = await getComment(id);
    } catch (e) {
      console.log(e);
      return rejectWithValue(e?.response?.data)
    }

    return comment;
  }
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    ids: [],
    commentById: {},
    request: {
      isLoading: false,
      error: null,
    },
  },
  reducers: {
    updateComments: (state, action) => {
      state.ids = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComment.pending, (state, action) => {
        state.request.isLoading = true;
      })
      .addCase(fetchComment.rejected, (state, action) => {
        state.request.isLoading = false;
        state.request.error = action.payload;
      })
      .addCase(fetchComment.fulfilled, (state, action) => {
        const { id, by, time, text, kids } = action.payload;

        state.commentById[id] = { id, by, time, text, kids };
        state.request.isLoading = false;
      })
  },
});

export const { updateComments } = commentsSlice.actions;

export default commentsSlice.reducer;
