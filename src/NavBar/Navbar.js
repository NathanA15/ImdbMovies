import React, { Component } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import Search from '../Search/Search';

class NavBar extends Component {
    render() {
        return(
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand" href='/'>Nathan Movies's</a>
                <Search />               
            </nav>            
        )
    };
};

export default NavBar;