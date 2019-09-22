import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            yearSelected: '',
            yearOptions: ['2019', '2018', '2017', '2016'],
            sortBySelected: 'popularity.desc',
            sortByOptions: [
                {forAPI: 'popularity.desc', forUser: 'Most viewed'},
                {forAPI: 'release_date.desc', forUser: 'Latest'},
                {forAPI: 'original_title.asc', forUser: 'Alphabetically'}
            ],
            genresSelected: [],
        };
    }

    handleClickYear = (e) => {
        if(e.target.dataset.yearOption === this.state.yearSelected) {
            this.setState({
                yearSelected: ''
            })
        } else {
            this.setState({
                yearSelected: e.target.dataset.yearOption
            });
        }
    }

    handleClickSortBy(sortByOptionForAPI) {
        // When there will be a class first initialize class then setState
        // or disable function with throttle.
        this.setState({
            sortBySelected: sortByOptionForAPI
        })

    }

    handleClickGenre(id) {
        // Need to add an else...
        if (!this.state.genresSelected.includes(id)) {
            this.setState(prevState => ({
                genresSelected: [...prevState.genresSelected, id]
            }))
        } else {
            this.setState(prevState => ({
                genresSelected: prevState.genresSelected.filter(value => value !== id )
            }))
        };
    }

    sendData = () => {
        var data =[this.state.sortBySelected, this.state.yearSelected, this.state.genresSelected];
        this.props.parentCallback(data);
    }

    render() {
        return (
            <div className={this.props.hidden ? 'hidden' : ' col-12'}>
                <div className='filter'>
                    <div className='row '>
                        <div className='col-md-3 col-sm-6 col-6 sortBy'>
                            <h4 className=' d-flex justify-content-center'>Sort By</h4>
                            <div className='col-12 '>
                                {this.state.sortByOptions.map(sortByOption =>
                                    <p
                                        key={sortByOption.forAPI} 
                                        onClick={() => this.handleClickSortBy(sortByOption.forAPI)}
                                        className={this.state.sortBySelected === sortByOption.forAPI ? 'sort-by-selected': ''}
                                    >
                                        {sortByOption.forUser}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className='col-md-3 col-sm-6 col-6 years'>
                            <h4 className='col-12 col-sm-6 d-flex justify-content-center'>Years</h4>
                                {this.state.yearOptions.map(yearOption => 
                                    <p 
                                        key={yearOption} 
                                        data-year-option={yearOption} 
                                        onClick={this.handleClickYear}
                                        className={this.state.yearSelected === yearOption ? 'year-selected': ''}
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
                                    className={this.state.genresSelected.includes(genre.id) ? 'genre-selected': ''}
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

export default Filter;