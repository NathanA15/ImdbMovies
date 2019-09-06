import React, { Component } from 'react';
import './Search.css';
import SearchResult from '../SearchResult/SearchResult';

const API = 'http://www.omdbapi.com/?apikey=62592d49&type=movie&r=json&s=';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { searchInput: '' , searchResult: [] };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.searchMovie = this.searchMovie.bind(this);
    };

    handleUpdate(event) {
        this.setState({ searchInput: event.target.value });
    };

    searchMovie() {
        if (this.state.searchInput !== '') {
            fetch(API + this.state.searchInput)
                .then(Response => Response.json())
                .then(data => this.setState({ searchResult: (data.Search ? data.Search.slice(0,5): []) }));
                // I need to put an if if there is no data or a data less than 5

            console.log(this.state.searchResult);
                
                

        };
    };

    handleSubmit(event) {
        event.preventDefault();
    };

    render() { 
        return(
            <div className='Search'>
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <input
                        type='text' 
                        value={ this.state.searchInput }
                        onChange={ this.handleUpdate }
                        className='searchInput form-control mr-sm-2'
                        placeholder="Search a movie"
                    />
                    &nbsp;&nbsp;
                    <button 
                        onClick={ this.searchMovie } 
                        className="btn btn-outline-success my-2 my-sm-0">
                        Search
                    </button>
                </form>
                <SearchResult result={this.state.searchResult}/>
                
            </div>
        );
    };
};

export default Search;