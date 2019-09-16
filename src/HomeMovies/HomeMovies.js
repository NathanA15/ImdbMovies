import React, { Component } from 'react';
import './HomeMovies.css';
// import { Card, Button } from 'react-bootstrap';


const newAPI = 'https://api.themoviedb.org/3/discover/movie?api_key=897a3a07ad8e40e0af18f33abfc8c9fa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=';
const thumbnail = 'https://image.tmdb.org/t/p/w500';


class HomeMovies extends Component{
	// This component displays the movies of the home page.

	constructor(props) {
		super(props);
		this.state = { movies: [] , page: 1};
		this.fetchMovies = this.fetchMovies.bind(this);
	};

	fetchMovies() {
		// Gets me the data of the movies and put it in the state movies
		// I'm doing the loop to take the data of two pages.
		if(this.state.movies.length === 0 ) {
			// console.log(newAPI + this.state.page)
			// console.log(this.state.page + 1)
			// console.log('###')
			fetch(newAPI + this.state.page)
				.then(response => response.json())
				.then(data => this.setState({ 
					movies: this.state.movies.concat(data.results), 
					page: this.state.page + 1,
				}))
		}
	};

	displayHomeMovies() {
		// First call the fetch movies then render each movie in his div.
		this.fetchMovies();
		return this.state.movies.map(movie => (
			<div className='moviePoster ' key={movie.id}>
				<a href={'/movie/'+ movie.id}>
					<img src={thumbnail + movie.poster_path}  alt={movie.title} className='movieImage'></img>
				</a>
			</div>
		));
	};

	displayHomeMoviesUpgraded() {
		this.fetchMovies();
		return this.state.movies.map(movie => (
			<div className='moviePoster ' key={movie.id}>
				<a href={'/movie/'+ movie.id}>
					<img src={thumbnail + movie.poster_path}  alt={movie.title} className='movieImage'></img>
				</a>
			</div>
		));
	};

	render() {
		return(
			<div className='HomeMovies'>
				<div className='movieCards'>
					{ this.displayHomeMovies() }
					{/* {this.displayHomeMoviesUpgraded()} */}
				</div>
			</div>
		);
	};


}

export default HomeMovies;