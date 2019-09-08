import React, {Component} from 'react';
import './MoviePage.css';

// tt0094531 Test movie num
const API = 'http://www.omdbapi.com/?apikey=62592d49&plot=full&r=json&i=';

class MoviePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id, 
            title: '',
            year: '',
            released: '',
            director: '',
            actors: '',
            plot: ''
        };
        this.getMovieData = this.getMovieData.bind(this);
    };
    
    getMovieData() {
        // fetch(API + this.state.id)
        //     .then(Response => Response.json())
        //     .then(data => this.setState({movie: data}));

        fetch(API + this.state.id)
            .then(Response => Response.json())
            .then(data => this.setState({ 
                title: data.Title,
                year: data.Year,
                released: data.Released,
                director: data.Director,
                actors: data.Actors,
                plot: data.Plot,
                poster: data.Poster
            }));
        
    };

    renderMovie() {
        this.getMovieData();
        return(
            <div className='movieInfo row'>
                <img src={this.state.poster} alt={this.state.title}></img>
                <div className='movieDescription'>
                    <h3>Title: <span className='movieTitle'>{this.state.title}</span></h3>
                
                    <h4>Released: <span className='movieTitle'>{this.state.released}</span></h4>
                    <h4>Directors: <span>{this.state.director}</span></h4>
                    <h5>Actors: <span>{this.state.actors}</span></h5>
                    <br />
                    <h5>Plot: <span>{this.state.plot}</span></h5>
                </div>
                
                
            </div>
        );
    };

    render() {
        return(
            <div className='moviePage'>
                {/* <h6>{this.state.id}</h6> */}
                {this.renderMovie()}
            </div>
            
        )
    }
}

export default MoviePage;