import React, { Component } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import Search from '../Search/Search';

class NavBar extends Component {
	// This is the navBar component containing the title of the project and the search component. 
	render() {
		return(
			<nav className="navbar justify-content-between bg-secondary" > 
				<a className="navbar-brand col-3" href='/' style={{color: 'white'}}>Nathan Movie's App</a>

				<Search className='col-5'/>
			</nav>
		)
	};
};

export default NavBar;