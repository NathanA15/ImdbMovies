import React, { Component } from 'react';
import './HomeMovies.scss';
import { Card, Button } from 'react-bootstrap';
import Filter from '../Filter/Filter';


const newAPI = 'https://api.themoviedb.org/3/discover/movie?api_key=897a3a07ad8e40e0af18f33abfc8c9fa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=';
const thumbnail = 'https://image.tmdb.org/t/p/w500';
const genreAPI ='https://api.themoviedb.org/3/genre/movie/list?api_key=897a3a07ad8e40e0af18f33abfc8c9fa&language=en-US'


class HomeMovies extends Component{
	// This component displays the movies of the home page.

	constructor(props) {
		super(props);
		this.state = { movies: [] , page: 1, genres: [], hideFilter: true};
		this.fetchMovies = this.fetchMovies.bind(this);
		this.fetchGenres = this.fetchGenres.bind(this);
		this.toggleVisibility = this.toggleVisibility.bind(this);
	};

	fetchMovies() {
		// Gets me the data of the movies and put it in the state movies
		// I'm doing the loop to take the data of two pages.
		if(this.state.movies.length === 0 ) {
			fetch(newAPI + this.state.page)
				.then(response => response.json())
				.then(data => this.setState({ 
					movies: this.state.movies.concat(data.results), 
					page: this.state.page + 1,
				}))
		}
	};

	fetchGenres() {
		if(this.state.genres.length === 0) {
			fetch(genreAPI)
				.then(response => response.json())
				.then(data => this.setState({
					genres: data.genres
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
		// First call the fetch movies then render each movie in his div.
		this.fetchMovies();
		this.fetchGenres();
		return this.state.movies.map(movie => (
			<div key={movie.id} className='col-xl-4 col-lg-6 col-md-6 col-sm-12 justify-content-sm-center justify-content-md-center up-card'>
				<Card className=' movie-card'>
					<a href={'/movie/'+ movie.id}>
						<Card.Img variant="top"  src={thumbnail + movie.poster_path} />
						<Card.Body className='card-body'>
							<Card.Title className='card-title row'>
								<div className='col-9'>
									{movie.title}
								</div>
								<div className='col-3 rating'>
									<i className="fa fa-star star"></i>
									<p className="voteAverage">{movie.vote_average}/10</p>
								</div>
							</Card.Title>
							<Card.Text className='row col-12'>
								{movie.overview.substring(0, 50)}...
							</Card.Text>
						</Card.Body>
						<Button className='btn-secondary button-card'>See more</Button> 
					</a>
				</Card>
			</div>
		));
	};

	toggleVisibility() {
		this.setState(prevState => ({
			hideFilter: !prevState.hideFilter
		}));
	}

	render() {
		return(
			<div className='container'>

				<div className='toggle-filter' onClick={this.toggleVisibility}> 
					<i className='fa fa-filter' /> Filter
				</div>
				
				<Filter hidden={this.state.hideFilter}/>
				
				<div className='row home-movies'>
					{this.displayHomeMoviesUpgraded()}
				</div>
			</div>
		);
	};


}

export default HomeMovies;