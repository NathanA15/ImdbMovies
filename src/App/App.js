import React from 'react';
import './App.css';
import NavBar from '../NavBar/Navbar';
import HomeMovies from '../HomeMovies/HomeMovies';

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<HomeMovies />

		</div>
	);
};

export default App;