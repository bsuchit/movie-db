import { connect } from "react-redux";
import _ from 'lodash';

import MoviePreview from "./MoviePreview";
import { fetchMoviePoster } from "redux/actions/actions";

const mapStateToProps = (state, props) => {
    return {
        poster: _.get(state, `movies.previews.${props.title}.Poster`, ''),
        ratings: _.get(state, `movies.previews.${props.title}.Ratings`, []),
        description: _.get(state, `movies.previews.${props.title}.Plot`, ''),
        loading: _.get(state, 'movies.previewLoading', true)
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        getPoster: () => {
            const date = new Date(props.releaseDate);
            dispatch(fetchMoviePoster({ title: props.title, year: date.getFullYear() }));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePreview);
