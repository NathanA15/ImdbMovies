import React, { Component } from 'react';
import './HomeMovies.scss';
import { Card, Button } from 'react-bootstrap';


const newAPI = 'https://api.themoviedb.org/3/discover/movie?api_key=897a3a07ad8e40e0af18f33abfc8c9fa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=';
const thumbnail = 'https://image.tmdb.org/t/p/w500';
const genreAPI ='https://api.themoviedb.org/3/genre/movie/list?api_key=897a3a07ad8e40e0af18f33abfc8c9fa&language=en-US'


class HomeMovies extends Component{
	// This component displays the movies of the home page.

	constructor(props) {
		super(props);
		this.state = { movies: [] , page: 2, genres: []};
		this.fetchMovies = this.fetchMovies.bind(this);
		this.fetchGenres = this.fetchGenres.bind(this);
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
		if(this.state.genres.length ===0) {
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
		this.fetchMovies();
		this.fetchGenres();
		// return this.state.movies.map(movie => (
		// 	<div key={movie.id} className='col-4 no-gutters card'>
		// 		<div className='card-header'>
		// 			<img src={thumbnail + movie.poster_path}  alt={movie.title}></img>
		// 		</div>
		// 		<div className='card-body'>
		// 			<h1 className='card-title'>{movie.title}</h1>
		// 			<div className='container'>
		// 				<div className='row'>
		// 					<div className='col-4 metadata'>
		// 						<i className="fa fa-star checked"></i>
		// 						<p>{movie.vote_average}/10</p>
		// 					</div>
		// 					<div className='col-8 metadata'>
		// 						Adventure, Drama
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<p>{movie.overview}</p>
		// 		</div>
				
		// 	</div>
		// ));
		return this.state.movies.map(movie => (
			<Card className='col-xl-3 col-lg-4 col-md-6 col-sm-12 justify-content-sm-center justify-content-md-center movie-card'>
				<a href={'/movie/'+ movie.id}>
					<Card.Img variant="top" src={thumbnail + movie.poster_path} />
					<Card.Body className='card-body'>
						<Card.Title className='card-title row'>
							<div className='col-9'>
								{movie.title}
							</div>
							<div className='col-3 rating'>
								<i className="fa fa-star checked"></i>
								<p>{movie.vote_average}/10</p>
							</div>
						</Card.Title>
						<Card.Text className='row col-12'>
							{movie.overview.substring(0, 70)}...
						</Card.Text>
						<Button className='btn-secondary'>See more</Button> 
						{ /* If I can I should add the ... and when clicking on button showing the rest of text */}
					</Card.Body>
				</a>
			</Card>
		));
	};

	render() {
		return(
			<div className='container'>
				<div className='row home-movies'>
					{this.displayHomeMoviesUpgraded()}
				</div>
			</div>
		);
	};


}

export default HomeMovies;