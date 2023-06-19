import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

import fetchData, { fetchMoviePoster } from 'redux/actions/actions';
import searchMovies from 'utils/utils';

const initialState = {
  data: [],
  isLoading: true,
  error: null,
  previews: {}
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    searchData: (state, action) => {
      state.data = searchMovies(state.data, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    builder.addCase(fetchData.rejected, (state) => {
      state.isLoading = false;
      state.data = [];
      state.error = true;
    })
    builder.addCase(fetchMoviePoster.pending, (state, action) => {
      state.previewLoading = true;
      state.previews[_.get(action, 'meta.arg.title')] = _.get(action, 'payload');
    })
    builder.addCase(fetchMoviePoster.fulfilled, (state, action) => {
      state.previewLoading = false;
      state.previews[_.get(action, 'meta.arg.title')] = _.get(action, 'payload');
    })
  },
});

export const { searchData } = moviesSlice.actions;

export default moviesSlice.reducer;
