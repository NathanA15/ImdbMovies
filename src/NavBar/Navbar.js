import React, { Component } from 'react';
import Search from '../Search/Search';

class NavBar extends Component {
	// This is the navBar component containing the title of the project and the search component. 
	render() {
		return(
			<nav className="navbar justify-content-between bg-secondary" > 
				<a className="navbar-brand" href="/" style={{color: "white"}}>Nathan Movie's App</a>
				<a className="nav-item movie-link" style={{color: "white"}} href="/">Movies</a>
				<Search />
			</nav>
		)
	};
};

export default NavBar;