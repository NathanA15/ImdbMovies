import React, {Component} from 'react';
import './MoviePage.css';

// tt0094531 Test movie num
const thumbnail = 'https://image.tmdb.org/t/p/w500';


class MoviePage extends Component{
	constructor(props) {
		super(props);
		// this.props.match.params.id is passed to the component when called.
		this.state = {
			id: this.props.match.params.id, 
			title: '',
			released: '',
			actors: '',
			plot: '',
			poster: '',
			rate: '',
			tagline: '',
			genres: []
		};
		this.getMovieData = this.getMovieData.bind(this);
	};
	
	getMovieData() {
		// fetching the data of the movie.
		// fetch(API + this.state.id)
		if(this.state.title === '') {		
			fetch('https://api.themoviedb.org/3/movie/'+ this.state.id +'?api_key=897a3a07ad8e40e0af18f33abfc8c9fa&language=en-US')
				.then(Response => Response.json())
				.then(data => this.setState({
					title: data.title,
					poster: data.poster_path,
					tagline: data.tagline,
					released: data.release_date,
					rate: data.vote_average,
					plot: data.overview,
					genres: data.genres
				}))
		}
	};

	renderMovie() {
		// render the div with the movie description after calling the getMovieData to fetch the data of the movie.
		this.getMovieData();
		return(
			<div className='movieInfo col-xl-8 col-sm-12' key={this.state.id}>
				<div className='row'>
					<div className='col-xl-1 d-none d-sm-block'>
						{/*  eslint-disable-next-line */}
						<a className="fa fa-home homeButton fa-lg " href='/'></a>
					</div>
					
					<img src={thumbnail + this.state.poster} alt={this.state.title} className='col-lg-5 col-sm-12'></img>
					<div className='movieDescription col-xl-6 col-lg-7 col-sm-12'>
						<h3>Title: <span className='movieTitle'>{this.state.title}</span></h3>
						<h4>Released: <span className='movieTitle'>{this.state.released}</span></h4>
						<h5>Plot: <span>{this.state.plot}</span></h5>
					</div>
					{/* <i className="fa fa-arrow-left arrow fa-lg"></i> */}
				</div>
			</div>
		);
	};

	render() {
		return(
			<div className='moviePage row no-gutters'>
				{this.renderMovie()}
			</div>
		)
	}
}

export default MoviePage;