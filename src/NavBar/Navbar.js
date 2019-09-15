import React, { Component } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import Search from '../Search/Search';

class NavBar extends Component {
	// This is the navBar component containing the title of the project and the search component. 
	render() {
		return(
			<nav
				className="navbar justify-content-between" 
				style={{
					backgroundColor: '#5680E9',
					borderBottomLeftRadius: '8px',
					borderBottomRightRadius: '8px',
					color: 'white'
				}}> 
				<a className="navbar-brand" href='/' style={{color: 'white'}}>Nathan Movie's App</a>
				<Search />
			</nav>
		)
	};
};

export default NavBar;