import { connect } from "react-redux";
import _ from 'lodash';

import App from "App";
import fetchData from "redux/actions/actions";

const mapStateToProps = (state) => {
    return {
        movies: _.get(state, 'movies.data', []),
        isLoading: _.get(state, 'movies.isLoading'),
        error: _.get(state, 'movies.error')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMount: () => {
            dispatch(fetchData());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
