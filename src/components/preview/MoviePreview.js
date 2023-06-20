import React, { useEffect } from "react";
import PropTypes from 'prop-types';

import 'components/components.scss';
import { Divider, Label, List, Loader, Rating } from "semantic-ui-react";
import _ from "lodash";

function MoviePreview({
    title, episode, director, releaseDate, description, producer, getPoster, poster, ratings, loading, runtime, language
}) {
    useEffect(() => {
        getPoster();
    }, [title]);

    if(loading){
        return <Loader active>Loader</Loader>
    }

    return (
        <div className="column preview" data-testid={`preview_${title}`}>
            <div className="row preview_header">
                { poster && 
                    <img className="poster" src={poster} />
                }
                <div>
                    <h1>{`${episode} - ${title}`}</h1>
                    <div>{`Release Date - ${releaseDate}`}</div>
                    <div>{`Director - ${director}`}</div>
                    <div>{`Producer - ${producer}`}</div>
                    <List className="column">
                        <List.Item><Label>{runtime}</Label></List.Item>
                        <List.Item><Label>{language}</Label></List.Item>
                    </List>
                </div>
            </div>
            <Divider />
            <p><h5>Plot</h5>{description}</p>
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
    loading: PropTypes.bool,
    runtime: PropTypes.string,
    language: PropTypes.string
};

export default MoviePreview;