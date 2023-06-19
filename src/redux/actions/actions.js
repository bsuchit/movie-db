import { createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';

import fetchMovies from 'services/APIServices';

export const fetchData = createAsyncThunk(
    'content/fetchMovies',
    async () => {
      const res = await fetchMovies();
      return _.get(res, 'results', []);
    }
);

export default fetchData;
