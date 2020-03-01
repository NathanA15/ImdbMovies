export function selectSortBy(sortBySelected) {
    return {
        type: 'SELECT_SORT_BY',
        sortBySelected: sortBySelected
    }
};

export function selectYear(yearSelected) {
    return {
        type: 'SELECT_YEAR',
        year: yearSelected
    }
};

export function selectGenre(id) {
    return {
        type: 'SELECT_GENRE',
        id: id
    }
}