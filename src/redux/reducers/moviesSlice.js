import { createSlice } from '@reduxjs/toolkit';

import fetchData from 'redux/actions/actions';

import searchMovies from 'utils/utils';

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    searchData: (state, action) => {
      state.data = searchMovies(state.data, action.payload);
    }
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
  },
});

export const { searchData } = moviesSlice.actions;

export default moviesSlice.reducer;
