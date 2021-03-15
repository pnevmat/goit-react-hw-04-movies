import React, { Component } from 'react';
import ApiService from '../components/utils/ApiService';
import Header from '../components/Header/Header';
import MovieDetailsCard from '../components/MovieDetailsCard/MovieDetailsCard';

const apiService = new ApiService();

class MovieDetailsPage extends Component {
    state = {
        movieDetails: {}
    };

    componentDidMount() {
        apiService.movieId = this.props.match.params.movieId;
        apiService.fetchFilmsDetails().then(details => {
            this.setState({movieDetails: details});
        });
    };

    render() {
        const {movieDetails} = this.state;
        return (
            <>
                <Header props={this.props} />
                <MovieDetailsCard
                    props={this.props}
                    movieDetails={movieDetails}
                />
            </>
        );
    };
};

export default MovieDetailsPage;