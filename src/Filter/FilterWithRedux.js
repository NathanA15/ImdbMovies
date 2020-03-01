import React, { Component } from 'react';
import './Filter.css';
import { store } from '../store';
import { selectSortBy, selectYear, selectGenre } from '../actions'; 


class FilterWithRedux extends Component{

    handleClickSortBy(sortByOptionForAPI) {
        // When there will be a class first initialize class then setState
        // or disable function with throttle.
        store.dispatch(selectSortBy(sortByOptionForAPI));
    }

    handleClickYear = (e) => {
        const yearClicked = e.target.dataset.yearOption;
        store.dispatch(selectYear(yearClicked));
    }

    handleClickGenre(id) {
        // Need to add an else...
        store.dispatch(selectGenre(id));
        // if (!this.state.genresSelected.includes(id)) {
        //     this.setState(prevState => ({
        //         genresSelected: [...prevState.genresSelected, id]
        //     }))
        // } else {
        //     this.setState(prevState => ({
        //         genresSelected: prevState.genresSelected.filter(value => value !== id )
        //     }))
        // };
    }

    sendData = () => {
        const { yearSelected, sortBySelected, genresSelected } = store.getState().filter;
        var data =[sortBySelected, yearSelected, genresSelected];
        this.props.parentCallback(data);
    }

    render() {
        const { yearSelected, yearOptions, sortBySelected, sortByOptions, genresSelected } = store.getState().filter;
        return (
            <div className={this.props.hidden ? 'hidden' : ' col-12'}>
                <div className='filter'>
                    <div className='row '>
                        
                        <div className='col-md-3 col-sm-6 col-6 sortBy'>
                            <h4 className=' d-flex justify-content-center'>Sort By</h4>
                            <div className='col-12 '>
                                {sortByOptions.map(sortByOption =>
                                    <p
                                        key={sortByOption.forAPI} 
                                        onClick={() => this.handleClickSortBy(sortByOption.forAPI)}
                                        className={sortBySelected === sortByOption.forAPI ? 'sort-by-selected': ''}
                                    >
                                        {sortByOption.forUser}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className='col-md-3 col-sm-6 col-6 years'>
                            <h4 className='col-12 col-sm-6 d-flex justify-content-center'>Years</h4>
                                {yearOptions.map(yearOption => 
                                    <p 
                                        key={yearOption} 
                                        data-year-option={yearOption} 
                                        onClick={this.handleClickYear}
                                        className={yearSelected === yearOption ? 'year-selected': ''}
                                    >
                                        {yearOption}
                                    </p>
                                )}
                        </div>
                        <div className='col-md-6 col-sm-12 col-12 genres'>
                            <h4 className='col-12 d-flex justify-content-center'>Genres</h4>
                            <div className='col-12 genres-p'>
                            {this.props.genres.map(genre => 
                                <p
                                    key={genre.id} 
                                    onClick={() => this.handleClickGenre(genre.id)}
                                    className={genresSelected.has(genre.id) ? 'genre-selected': ''}
                                >
                                    {genre.name}
                                </p>
                            )}
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-outline-secondary col-2 offset-5" onClick={this.sendData}>Filter Movies</button>
                </div>
            </div>
        );
    }
}

export default FilterWithRedux;