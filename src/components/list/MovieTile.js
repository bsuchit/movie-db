import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";

import './MovieList.scss';

function MovieTile({ data = {}, onClick, selected = false }) {
  const handleOnClick = () => {
    onClick && onClick(data);
  };

  return (<div className="movie_card">
      <div className={classNames('info_section', { selected })} onClick={handleOnClick} data-testid={data.title}>
        <div className="movie_header">
          <div className="column">
            <h1>{data.title}</h1>
            <p className="type">{`Episode ${data.episode_id}`}</p>
          </div>
          <div className="vertical" />
          <div className="column">
            <h4>{`Release Date: ${data.release_date}`}</h4>
            <h4>{`Director: ${data.director}`}</h4>
          </div>
        </div>
      </div>
    </div>);
}

MovieTile.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
  selected: PropTypes.bool
};

export default MovieTile;
