import React, { Component } from 'react';

class MoviesList extends Component {
    render() {
        return (
            <ul>
                {this.props.movies.map(movie=>{
                    return <li key={movie}>{movie}</li>
                })}
            </ul>
        );
    }
}

export default MoviesList;