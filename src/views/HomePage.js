import React from 'react';
import MovieGallery from '../components/MovieGallery/MovieGallery';
import Header from '../components/Header/Header';

const HomePage = (props) => {
    
    return (
        <>
            <Header props={props} />
            <MovieGallery movies={props.movies} />
        </>
    );
};

export default HomePage;