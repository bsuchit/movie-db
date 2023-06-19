import { configureStore } from '@reduxjs/toolkit';

import moviesSlice from './reducers/moviesSlice';

const store = configureStore({
    reducer: {
      movies: moviesSlice,
    }
});

export default store;
