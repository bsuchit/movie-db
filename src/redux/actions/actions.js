import { createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';

import fetchMovies, { fetchPoster} from 'services/APIServices';

export const fetchData = createAsyncThunk(
    'content/fetchMovies',
    async () => {
      const res = await fetchMovies();
      return _.get(res, 'results', []);
    }
);

export const fetchMoviePoster = createAsyncThunk(
    'content/fetchMoviePoster',
    async (data, { getState }) => {
      const state = getState();
      const preview = _.get(state, `movies.previews.${data.title}`);
      if (preview) {
        return preview;
      }
      const res = await fetchPoster(data);
      return res || {};
    }
);

export default fetchData;
