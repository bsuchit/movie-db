import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Image, Loader } from 'semantic-ui-react';

import MovieList from 'components/list/MovieList';
import Logo from 'resources/star-wars-logo.png';
function App({ onMount, movies = [], isLoading = false, error = false}) {
  useEffect(() => {
    onMount && onMount();
  }, [onMount]);

  if (error) {
    return <label>Error Occurred</label>
  }

  return (
    <div>
      <Image src={Logo} className="logo" />
      <div>
        {
          isLoading ? 
          <Loader active>Loading...</Loader>
          :
          <MovieList
            movies={movies}
          /> 
        }
      </div>
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
