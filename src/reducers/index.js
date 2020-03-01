export default (state, action) => {
    switch (action.type) {
        case 'SELECT_SORT_BY':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    sortBySelected: action.sortBySelected
                }
            }
            
        case 'SELECT_YEAR':
            const year = action.year;
            if(year === state.filter.yearSelected) {
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        yearSelected: ''
                    }
                }
            } else {
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        yearSelected: year
                    }
                }
            }
        case 'SELECT_GENRE':
            let genres = state.filter.genresSelected;
            const id = action.id;

            if(genres.has(id)) {
                genres.delete(action.id);
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        genresSelected: genres
                    }
                }
            } else {
                genres.add(id)
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        genresSelected: genres
                    }
                }
            }
        default:
            return state
    }
};