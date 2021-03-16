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
    movies: [],
    location: '/'
  };

  componentDidMount() {
    apiService.fetchPopularFilms().then(movies => {
      this.setState({movies})
    });
  };

  onChangePath = (path) => {
    this.setState({location: path});
  };

  render() {
    return (
      <>
        <Route exact path="/" render={props => 
          <HomePage 
            {...props} 
            movies={this.state.movies}
            onChangePath={this.onChangePath}
          />}
        />
        <Route exact path="/movies" render={props =>
          <Movies 
            {...props}
            onChangePath={this.onChangePath} 
          />} 
        />
        <Route path="/movies/:movieId" render={props =>
          <MovieDetailsPage 
            {...props} 
            prevLocation={this.state.location}
          />}
        />
      </>
    );
  };
};

export default MovieFinder;