import _ from 'lodash';

export default function searchMovies(movies, searchText){
    if (!_.isEmpty(movies)) {
        return _.filter(movies, ({ title }) => title && title.toLowerCase().includes(searchText.toLowerCase()));
    }

    return [];
}