import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import MovieList from 'components/list/MovieList';
function App({ onMount, movies = [], isLoading = false, error = false}) {
  useEffect(() => {
    onMount && onMount();
  }, [onMount]);

  if (error) {
    return <label>Error Occurred</label>
  }

  return (
    <div>
      {
        isLoading ? 
        <label>Loading...</label>
        :
        <MovieList
          movies={movies}
        /> 
      }
    </div>
  );
}

App.propTypes = {
  onMount: PropTypes.func,
  movies: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.bool
};

export default App;
