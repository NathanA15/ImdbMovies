import React, { Component } from 'react';
import './HomeMovies.scss';
import { Card, Button } from 'react-bootstrap';
import Filter from '../Filter/Filter';
import FilterWithRedux from '../Filter/FilterWithRedux';


const newAPI = 'https://api.themoviedb.org/3/discover/movie?api_key=897a3a07ad8e40e0af18f33abfc8c9fa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=';
const thumbnail = 'https://image.tmdb.org/t/p/w500';
const genreAPI ='https://api.themoviedb.org/3/genre/movie/list?api_key=897a3a07ad8e40e0af18f33abfc8c9fa&language=en-US'


class HomeMovies extends Component{
	// This component displays the movies of the home page.

	constructor(props) {
		super(props);
		this.state = { movies: [] , page: 1, genres: [], hideFilter: true };
	};

	componentDidMount() {
		this.fetchMovies();
		this.fetchGenres();
	}

	fetchMovies = () => {
		// Gets me the data of the movies and put it in the state movies
		fetch(newAPI + this.state.page)
			.then(response => response.json())
			.then(data => this.setState({
				movies: this.state.movies.concat(data.results), 
				page: this.state.page + 1,
			}))
	};

	fetchGenres = () => {
		// Fetching all the genres available in the api
		fetch(genreAPI)
			.then(response => response.json())
			.then(data => this.setState({
				genres: data.genres
			}))
	};

	displayHomeMoviesUpgraded() {
		// Return the html for each movie card
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
									<span className="voteAverage">{movie.vote_average}/10</span>
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

	toggleVisibility = () => {
		// This function changes automatically the visibility of the filter
		this.setState(prevState => ({
			hideFilter: !prevState.hideFilter
		}));
	}

	callbackFunction = (newData) => {
		// I'm getting my data in a list where the first element is the order of the data, the second is the
		// year selected and the third is an array of genres id selected.
		var filterAPI = `https://api.themoviedb.org/3/discover/movie?api_key=897a3a07ad8e40e0af18f33abfc8c9fa&language=en-US&include_adult=false&include_video=false&page=1&sort_by=${newData[0]}&year=${newData[1]}&with_genres=${newData[2].join(',')}`;

		fetch(filterAPI)
			.then(response => response.json())
			.then(function(data) {
				if(data.results.length !== 0) {
					this.setState({
						movies: data.results,
						hideFilter: true
					})
				} else {
					this.setState({
						hideFilter: true
					})
				}
			}.bind(this))
	}

	render() {
		return(
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='row toggle-filter d-flex justify-content-center' onClick={this.toggleVisibility}> 
						<i className='fa fa-filter filter-icon' /> Filter
					</div>
					{/* <Filter hidden={this.state.hideFilter} genres={this.state.genres} parentCallback={this.callbackFunction}/> */}
					<FilterWithRedux hidden={this.state.hideFilter} genres={this.state.genres} parentCallback={this.callbackFunction}/>
				</div>

				<div className='row home-movies'>
					{this.displayHomeMoviesUpgraded()}
				</div>
			</div>
		);
	};
}

export default HomeMovies;