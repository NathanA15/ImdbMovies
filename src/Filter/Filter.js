import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            year: null,
            genres: null
        } 
    }

    checkboxCheck() {
    }

    render() {
        return (
            <div className={this.props.hidden ? 'hidden' : 'filter '}>
                <div className='row no-gutters'>
                    <div className='col-4 sortBy'>
                        <h4>Year</h4>
                        <ul>
                            <li>
                                <input 
                                    type="checkbox" 
                                    onClick={this.checkboxCheck} 
                                    checked={this.state.year}
                                    // onChange={(e) => {this.checkboxCheck(e)}}
                                />
                                2019
                            </li>
                            <li>
                                <input 
                                    type="checkbox" 
                                    onClick={this.checkboxCheck} 
                                />
                                2018
                            </li>
                        </ul>
                    </div>
                    <div className='col-4 yearBoxes'>
                        <h4>Sort By</h4>
                        <ul>
                            <li>
                                <input 
                                    type="checkbox" 
                                    onClick={this.checkboxCheck} 
                                />
                                Asc
                            </li>
                            <li>
                                <input 
                                    type="checkbox" 
                                    onClick={this.checkboxCheck} 
                                />
                                Desc
                            </li>
                        </ul>
                    </div>
                    <div className='col-4 genres'>
                        <h4>Genres</h4>
                        <ul>
                            <li>
                                <input 
                                    type="checkbox" 
                                    onClick={this.checkboxCheck} 
                                />
                                Action
                            </li>
                            <li>
                                <input 
                                    type="checkbox" 
                                    onClick={this.checkboxCheck} 
                                />
                                Adventure
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;