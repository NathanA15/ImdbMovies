import React, { Component } from 'react';
import './Search.css';
import SearchResult from '../SearchResult/SearchResult';

const API = 'http://www.omdbapi.com/?apikey=62592d49&type=movie&r=json&s=';

class Search extends Component {
	// This is the search component, when clicking on the search button or enter it's doing the search with the api.
	// This will help us find the movies that we type in.

	constructor(props) {
		super(props);
		this.state = { 
			searchInput: '',
			searchResult: [],
			resultShow: false
		};
		this.handleUpdate = this.handleUpdate.bind(this);
		this.searchMovie = this.searchMovie.bind(this);
		this.onBlur = this.onBlur.bind(this);  
		this.focusOnSearch = this.focusOnSearch.bind(this);
	};

	handleUpdate(event) {
		// Everytime a character is entered updating the content of the state so that it's saved for us to be able to search for the movie.
		this.setState({ searchInput: event.target.value });
	};

	searchMovie() {
		// This function gets us the data about the research input.
		if (this.state.searchInput !== '') {
			fetch(API + this.state.searchInput)
				.then(Response => Response.json())
				.then(data => this.setState({ searchResult: (data.Search ? data.Search.slice(0,5): []), resultShow: true }));
		};
	};

	handleSubmit(event) {
		// This prevent the page to refresh when clicking enter on the form.
		event.preventDefault();
	};

	onBlur(e) {
		// this hides the result when clicking outside the div search wich also includes the search results when there are some.
		var currentTarget = e.currentTarget;
		setTimeout(() => {
			if (!currentTarget.contains(document.activeElement)) {
				this.setState({resultShow: false});
				console.log('blur2')
			}
		}, 0)
	};
	
	focusOnSearch() {
		// when starting to search putting the div visible
		this.setState({resultShow: true});
	}

	render() { 
		return(
			<div className='Search' onBlur={this.onBlur} onFocus={this.focusOnSearch}>
				<form className="form-inline" onSubmit={this.handleSubmit}>
					<input
						type='text' 
						value={ this.state.searchInput }
						onChange={ this.handleUpdate }
						className='searchInput form-control mr-sm-2'
						placeholder="Search a movie"
					/>
					<button 
						onClick={ this.searchMovie } 
						className="btn btn-outline-success my-2 my-sm-0">
						Search
					</button>
				</form>
				<SearchResult result={this.state.searchResult} resultShow={this.state.resultShow}/>
			</div>
		);
	};
};

export default Search;