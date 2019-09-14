import React, { Component } from 'react';
import './HomeMovies.css';
// import { Card, Button } from 'react-bootstrap';



const API = 'http://www.omdbapi.com/?apikey=62592d49&r=json&s=pup&page=4-8';

class HomeMovies extends Component{
	constructor(props) {
		super(props);
		this.state = { movies: [] }
		this.fetchMovies = this.fetchMovies.bind(this);
	};

	fetchMovies() {
		if(this.state.movies.length === 0 ) {
			fetch(API)
				.then(Response => Response.json())
				.then(data => this.setState({ movies: data.Search}));
		};
	};

	displayHomeMovies() {
		// Needs to be done when the fetch is complete
		return this.state.movies.map(movie => (
			<div className='moviePoster ' key={movie.imdbID}>
				<a href={'/movie/'+ movie.imdbID}>
					<img src={movie.Poster}  alt={movie.Title} className='movieImage'></img>
				</a>
			</div>
		));
	};

	render() {
		return(
			<div className='HomeMovies'>
				{this.fetchMovies()}
				<div className='movieCards'>
					{ this.displayHomeMovies() }
				</div>
			</div>
		);
	};
}

export default HomeMovies;