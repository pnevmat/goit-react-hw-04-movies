import React, { Component, lazy, Suspense } from 'react';
import { Route } from 'react-router';
import ApiService from './components/utils/ApiService';
import LoaderSpinner from './components/Loader/Loader';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';

const HomePage = lazy(() => import('./views/HomePage' /* webpackChunkName: "Home-Page" */));
const Movies = lazy(() => import('./views/Movies' /* webpackChunkName: "Movies" */));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage' /* webpackChunkName: "Movie-Details-Page" */));

const apiService = new ApiService();

class MovieFinder extends Component {
  state = {
    query: '',
    movies: [],
    location: '/'
  };

  componentDidMount() {
    apiService.fetchPopularFilms().then(movies => {
      this.setState({movies})
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const {query, location, movies} = this.state;
    if (query !== '' && query !== prevState.query) {
        apiService.queryValue = this.state.query;
        apiService.fetchSearchFilms().then(movies => {
            this.setState({movies});
        });
    } else if (query === '' && location === '/movies' && movies.length !== 0) {
      this.setState({movies: []});
    } else if (query !== '' && location === '/') {
      apiService.fetchPopularFilms().then(movies => {
        this.setState({movies})
      });
    };
};

  onSubmit = (value) => {
    this.setState({
      query: value,
    });
  };

  onChangePath = (path) => {
    this.setState({location: path});
  };

  render() {
    return (
      <>
        <Suspense fallback={<LoaderSpinner />}>
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
              onSubmit={this.onSubmit}
              movies={this.state.movies}
            />} 
          />
          <Route path="/movies/:movieId" render={props =>
            <MovieDetailsPage 
              {...props} 
              prevLocation={this.state.location}
            />}
          />
        </Suspense>
      </>
    );
  };
};

export default MovieFinder;