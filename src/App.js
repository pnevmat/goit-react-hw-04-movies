import React, { Component } from 'react';
import ApiService from './components/utils/ApiService';

const apiService = new ApiService();

class MovieFinder extends Component {
  state = {}

  render() {
    // apiService.fetchPopularFilms().then(movies => {
    //   console.log(movies);
    // });
    // apiService.fetchSearchFilms().then(movies => {
    //   console.log(movies);
    // });
    // apiService.fetchFilmsDetails().then(details => {
    //   console.log(details);
    // });
    // apiService.fetchFilmsActors().then(actors => {
    //   console.log(actors);
    // });
    // apiService.fetchFilmsReviews().then(reviews => {
    //   console.log(reviews);
    // });
    return (
      <section>
        
      </section>
    );
  };
};

export default MovieFinder;