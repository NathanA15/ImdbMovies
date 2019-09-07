import React, { Component } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import Search from '../Search/Search';

class NavBar extends Component {
    render() {
        return(
            <nav 
                className="navbar justify-content-between" 
                style={{
                    backgroundColor: '#696464',
                    borderBottomLeftRadius: '8px',
                    borderBottomRightRadius: '8px'
                }}>
                <a className="navbar-brand" href='/'>Nathan Movie's App</a>
                <Search />               
            </nav>            
        )
    };
};

export default NavBar;