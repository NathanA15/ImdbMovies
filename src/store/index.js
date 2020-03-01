import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = { 
    filter: {
        yearSelected: '',
        yearOptions: ['2020', '2019', '2018', '2017', '2016'],
        sortBySelected: 'popularity.desc',
        sortByOptions: [
            {forAPI: 'popularity.desc', forUser: 'Most viewed'},
            {forAPI: 'release_date.desc', forUser: 'Latest'},
            {forAPI: 'original_title.asc', forUser: 'Alphabetically'}
        ],
        genresSelected: new Set(),
    }
};

export const store = createStore(reducer, initialState);
