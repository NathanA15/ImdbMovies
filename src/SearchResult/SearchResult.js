import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './SearchResult.css';


class SearchResult extends Component {
	renderResult() {
		// creates the links to the results.
		return this.props.result.map((movie, index) => (
			<a href={'/movie/' + movie.imdbID} key={index}>
				<ListGroup.Item > {movie.Title} </ListGroup.Item>
			</a>
		));
	}

	render() {
		return(
			<div className={'searchResult ' + (this.props.resultShow  ? '': 'hidden')} >
				<Card style={{ width: '18rem' }}>
					<ListGroup variant="flush">
						{ this.renderResult() }      
					</ListGroup>
				</Card>
			</div>
		);
	};
};

export default SearchResult