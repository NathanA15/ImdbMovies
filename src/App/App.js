import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import NavBar from '../NavBar/Navbar';
import HomeMovies from '../HomeMovies/HomeMovies';
import MoviePage from '../MoviePage/MoviePage';


const App = () => {
	return (
		<div className="container">
			<NavBar />
			<Router>
					<Route exact path='/' component={HomeMovies} />
					<Route path='/movie/:id' component={MoviePage} />
			</Router>
		</div>
	);
};

export default App;