import { connect } from "react-redux";
import _ from 'lodash';

import MoviePreview from "./MoviePreview";
import { fetchMoviePoster } from "redux/actions/actions";

const mapStateToProps = (state, props) => {
    return {
        poster: _.get(state, `movies.posters.${props.title}`, [])
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        getPoster: () => {
            dispatch(fetchMoviePoster(props.title));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePreview);
