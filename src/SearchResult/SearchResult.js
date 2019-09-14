import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './SearchResult.css';


class SearchResult extends Component {
	renderResult() {
		return this.props.result.map((movie, index) => (
			<a href={'/movie/' + movie.imdbID}>
				<ListGroup.Item key={index}> {movie.Title} </ListGroup.Item>
			</a>
		));
	}

	hideResult() {
		// this.props.resultShow
	}

	render() {
		return(
			<div className={'searchResult ' + (this.props.resultShow  ? '': 'hidden')} onBlur={this.hideResult}>
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