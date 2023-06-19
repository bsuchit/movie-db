import React, { useEffect } from "react";
import PropTypes from 'prop-types';

import 'components/components.scss';
import { Divider, Label, List, Loader, Rating } from "semantic-ui-react";
import _ from "lodash";

function MoviePreview({ title, episode, director, releaseDate, description, producer, getPoster, poster, ratings, loading }) {
    useEffect(() => {
        getPoster();
    }, [title]);

    if(loading){
        return <Loader active>Loader</Loader>
    }

    return (
        <div className="column preview">
            <div className="row preview_header">
                { poster && 
                    <img className="poster" src={poster} />
                }
                <h1>{`${episode} - ${title}`}</h1>
            </div>
            <Divider />
            <p><h5>Plot</h5>{description}</p>
            <Divider />
            <div>{`Release Date - ${releaseDate}`}</div>
            <div>{`director - ${director}`}</div>
            <div>{`Producer - ${producer}`}</div>
            <Divider />
            <div className="average_rating">Average Rating - <Rating defaultRating={5} maxRating={10} /></div>
            <div>
                <List className="row">
                    {
                        ratings && _.map(ratings, rating => (<List.Item key={rating.Source}>
                                <Label>
                                    {rating.Source}
                                    <Label.Detail>{rating.Value}</Label.Detail>
                                </Label>
                            </List.Item>)
                        )
                    }
                </List>
            </div>
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
    poster: PropTypes.string,
    ratings: PropTypes.array,
    loading: PropTypes.bool
};

export default MoviePreview;