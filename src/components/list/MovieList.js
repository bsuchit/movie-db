import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import _ from 'lodash';

import searchMovies from "utils/utils";
import 'components/components.scss';

import MovieTile from "./MovieTile";
import './MovieList.scss';
import MoviePreviewContainer from "components/preview/MoviePreviewContainer";
import ActionBar from "./ActionBar";
function MovieList({ movies = [] }) {
  const [moviesState, setMoviesState] = useState([]);
  const [selection, setSelection] = useState();

  useEffect(() => {
    setMoviesState(movies);
  }, [movies]);

  const handleOnSearch = (searchText) => {
    setMoviesState(searchMovies(movies, searchText));
  };

  const handleOnSort= (name) => {
    setMoviesState(_.orderBy(moviesState, [name], ['asc']));
  };

  const handleOnMovieSelected = (movie) => {
    setSelection(movie);
  };

  return <div>
    <ActionBar onSearch={handleOnSearch} onSort={handleOnSort} />
    {
      !_.isEmpty(moviesState) ?
    <div className="list_container">
      <div className="list">
        {
            _.map(moviesState, (movie) => movie &&
              <MovieTile
                key={`${movie.title}${movie.episode_id}`}
                data={movie}
                onClick={handleOnMovieSelected}
                selected={selection && selection.episode_id === movie.episode_id}
              />)
        }
      </div>
      {
        selection ?
          <MoviePreviewContainer
            title={selection.title}
            episode={selection.episode_id}
            director={selection.director}
            producer={selection.producer}
            releaseDate={selection.release_date}
          />
        :
          <div className="auto_margin">Please select movie to see preview.</div>
      }
      </div>
      :
        <div>No Movies found.</div>
    }
  </div>;
}

MovieList.propTypes = {
  movies: PropTypes.array,
  onSearch: PropTypes.func
};

export default MovieList;
