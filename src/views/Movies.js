import React, { Component } from 'react';
import Header from '../components/Header/Header';
import MovieGallery from '../components/MovieGallery/MovieGallery';

import ApiService from '../components/utils/ApiService';

const apiService = new ApiService();

class Movies extends Component {
    state = {
        query: '',
        movies: []
    };

    componentDidUpdate(prevProps, prevState) {
        const {query} = this.state;
        if (query !== '' && query !== prevState.query) {
            apiService.queryValue = this.state.query;
            apiService.fetchSearchFilms().then(movies => {
                this.setState({movies});
            });
        };
    };

    onSubmit = (value) => {
        this.setState({
            query: value,
        });
    };

    render() {
        return (
            <>
                <Header
                    props={this.props}
                    onSubmit={this.onSubmit}
                />
                <MovieGallery movies={this.state.movies} />
            </>
        );
    };
};

export default Movies;