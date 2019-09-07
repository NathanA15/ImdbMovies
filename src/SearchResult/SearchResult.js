import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './SearchResult.css';


class SearchResult extends Component {
    // constructor(props) {
    //     super(props);
    // }

    renderResult() {
        return this.props.result.map((movie, index) => (
            <a href={'/movie/' + movie.imdbID}>
                <ListGroup.Item key={index}>{movie.Title}</ListGroup.Item>
            </a>
        ));
    }

    render() {
        return(
            <div className={'searchResult ' + (this.props.resultShow  ? '': 'hidden')}>
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