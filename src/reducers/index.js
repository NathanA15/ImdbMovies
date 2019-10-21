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
            if(action.year === state.filter.yearSelected) {
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
                        yearSelected: action.year
                    }
                }
            }

        default:
            return state
    }
};