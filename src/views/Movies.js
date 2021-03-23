import React, { Component } from 'react';
import Header from '../components/Header/Header';
import MovieGallery from '../components/MovieGallery/MovieGallery';

class Movies extends Component {
    state = {};

    render() {
        return (
            <>
                <Header
                    props={this.props}
                    onSubmit={this.props.onSubmit}
                />
                <MovieGallery 
                    movies={this.props.movies}
                    onChangePath={this.props.onChangePath}
                />
            </>
        );
    };
};

export default Movies;