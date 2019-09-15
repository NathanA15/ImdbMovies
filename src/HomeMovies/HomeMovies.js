import React, { Component } from 'react';
import './HomeMovies.css';
// import { Card, Button } from 'react-bootstrap';



const API = 'http://www.omdbapi.com/?apikey=62592d49&r=json&s=pup&page=4-8';

class HomeMovies extends Component{
	// This component displays the movies of the home page.

	constructor(props) {
		super(props);
		this.state = { movies: [] }
		this.fetchMovies = this.fetchMovies.bind(this);
	};

	fetchMovies() {
		// Gets me the data of the movies and put it in the state movies
		if(this.state.movies.length === 0 ) {
			fetch(API)
				.then(Response => Response.json())
				.then(data => this.setState({ movies: data.Search}));
		};
	};

	displayHomeMovies() {
		// First call the fetch movies then render eachmovie in his div.
		this.fetchMovies();
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
				<div className='movieCards'>
					{ this.displayHomeMovies() }
				</div>
			</div>
		);
	};
}

export default HomeMovies;