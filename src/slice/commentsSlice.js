import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getComment} from "../api/getComment";
import {getKidsComments} from "../api/getKidsComments";

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (ids, {rejectWithValue}) => {
    const commentIds = ids;
    let comments = [];

    try {
      comments =  await Promise.all(
        commentIds.map(async (id) => {
          return getComment(id);
        })
      );
    } catch (e) {
      console.log(e);
      return rejectWithValue(e?.response?.data)
    }

    return comments;
  }
);

export const fetchKidsComments = createAsyncThunk(
  'comments/fetchKidsComments',
  async (kidsIds, {rejectWithValue}) => {
    let comments = [];

    try {
      comments = await getKidsComments(kidsIds);
    } catch (e) {
      console.log(e);

      return rejectWithValue(e?.response?.data)
    }

    return comments;
  }
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    ids: [],
    commentsById: {},
    request: {
      isLoading: false,
      isLoadingKid: false,
      error: null,
      isFetchSuccess: null,
      isFetchKidsSuccess: null,
    },
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state, action) => {
        state.request.isLoading = true;
        state.request.isFetchSuccess = false;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.request.isLoading = false;
        state.request.error = action.payload;
        state.request.isFetchSuccess = false;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        const comments = action.payload;
        const ids = [];

        comments.forEach((comment) => {
          const { id, by, time, text, kids } = comment;

          state.commentsById[id] = { id, by, time, text, kids };
          ids.push(id);
        });
        state.ids = ids;
        state.request.isLoading = false;
        state.request.isFetchSuccess = true;
      })
      .addCase(fetchKidsComments.pending, (state, action) => {
        state.request.isLoadingKid = true;
        state.request.isFetchKidsSuccess = false;
      })
      .addCase(fetchKidsComments.rejected, (state, action) => {
        state.request.isLoadingKid = false;
        state.request.error = action.payload;
        state.request.isFetchKidsSuccess = false;
      })
      .addCase(fetchKidsComments.fulfilled, (state, action) => {
        const comments = action.payload;

        if (comments.length > 0 && comments[0]) {
          const parentId = comments[0].parent;

          state.commentsById[parentId].kidsData = comments;
        }

        state.request.isLoadingKid = false;
        state.request.isFetchKidsSuccess = true;
      })

  },
});

//export const {} = commentsSlice.actions;

export default commentsSlice.reducer;
