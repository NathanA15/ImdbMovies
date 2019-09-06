import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './SearchResult.css';


class SearchResult extends Component {
    // constructor(props) {
    //     super(props);
    // }

    renderResult() {
        return this.props.result.map((movie, index) => (
            <ListGroup.Item key={index}>{movie.Title}</ListGroup.Item>
        ));
    }

    render() {
        return(
            // <div className='searchResult' style={'display: ' + (this.props.result !== null ? 'block': 'none' )}>
            <div className={'searchResult ' + (this.props.result.length > 0 ? '': 'hidden')}>
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