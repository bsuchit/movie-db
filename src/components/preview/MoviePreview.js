import React from "react";
import PropTypes from 'prop-types';

import 'components/components.scss';

function MoviePreview({ title, episode, director, releaseDate, description, producer }) {
    return (
        <div className="column">
            <h1>{`${episode} - ${title}`}</h1>
            <p>{description}</p>
            <div>{`Release Date - ${releaseDate}`}</div>
            <div>{`director - ${director}`}</div>
            <div>{`Producer - ${producer}`}</div>
        </div>
    )
}

MoviePreview.propTypes = {
    title: PropTypes.string,
    episode: PropTypes.number,
    director: PropTypes.string,
    releaseDate: PropTypes.string,
    description: PropTypes.string,
    producer: PropTypes.string,
};

export default MoviePreview;