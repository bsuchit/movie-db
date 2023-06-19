import React, { useEffect } from "react";
import PropTypes from 'prop-types';

import 'components/components.scss';

function MoviePreview({ title, episode, director, releaseDate, description, producer, getPoster, poster }) {
    useEffect(() => {
        getPoster();
    }, [title]);

    return (
        <div className="column preview">
            <div className="row preview_header">
                { poster && 
                    <img className="poster" src={`http://image.tmdb.org/t/p/w500/${poster}`} />
                }
                <h1>{`${episode} - ${title}`}</h1>
            </div>
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
    getPoster: PropTypes.func,
    poster: PropTypes.string
};

export default MoviePreview;