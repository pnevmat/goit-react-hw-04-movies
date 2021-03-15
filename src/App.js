import React, { Component } from 'react';
import { Route } from 'react-router';
import ApiService from './components/utils/ApiService';

import HomePage from './views/HomePage';
import Movies from './views/Movies';
import MovieDetailsPage from './views/MovieDetailsPage';

import './App.css';

const apiService = new ApiService();

class MovieFinder extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    apiService.fetchPopularFilms().then(movies => {
      this.setState({movies})
    });
  }

  render() {
    return (
      <>
        <Route exact path="/" render={props => <HomePage {...props} movies={this.state.movies} />} />
        <Route exact path="/movies" component={Movies} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
      </>
    );
  };
};

export default MovieFinder;