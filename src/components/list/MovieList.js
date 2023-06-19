import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Button, Popup, Input } from "semantic-ui-react"; 

import FilterPopup from "components/filter/FilterPopup";
import searchMovies from "utils/utils";
import 'components/components.scss';

import MovieTile from "./MovieTile";
import './MovieList.scss';
import MoviePreviewContainer from "components/preview/MoviePreviewContainer";

const sortByData = [
  {
    name: 'episode_id',
    label: 'Episode'
  },
  {
    name: 'release_date',
    label: 'Release Date'
  }
];

function MovieList({ movies = [] }) {
  const [moviesState, setMoviesState] = useState([]);
  const [searchText, setSearchText] = useState();
  const [sortBySelection, setSortBySelection] = useState();
  const [selection, setSelection] = useState();

  useEffect(() => {
    setMoviesState(movies);
  }, [movies]);

  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    setMoviesState(searchMovies(movies, e.target.value));
  };

  const handleOnFilterSelected = (name, checked) => {
    setSortBySelection(checked ? name : null);
    setMoviesState(_.orderBy(moviesState, [name], ['asc']));
  };

  const handleOnMovieSelected = (movie) => {
    setSelection(movie);
  };

  return <div>
    <div className="row list_header">
      <Popup 
        content={<FilterPopup
          data={sortByData}
          selection={sortBySelection}
          onSelected={handleOnFilterSelected}
        />} 
        on='click'
        pinned
        trigger={<Button className="sortby_button" content="Sort By" />}
        position="bottom left"
      />
      <Input
        type="text"
        className="search_input"
        placeholder="Type to search..."
        value={searchText}
        onChange={handleOnChange}
        icon='search'
      />
    </div>
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
            description={selection.opening_crawl}
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
