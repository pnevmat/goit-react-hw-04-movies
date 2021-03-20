import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Shortid from 'shortid';

import noPoster from './no_poster.png';
import styles from './MovieGallery.module.css';

class MovieGallery extends Component {
    state = {
        movies: []
    };

    render() {
        const rootPosterPath = `https://image.tmdb.org/t/p/w500`;
        const {movies} = this.props;
        return (
            <>
                <div className={styles.filmGalleryContainer}>
                    <ul className={styles.film_gallery}>
                        {movies.map(movie => {
                            let posterPath = `${rootPosterPath}${movie.poster_path}`;
                            return (
                                <li className={styles.film_gallery_item} key={movie.id}>
                                    <NavLink to={`/movies/${movie.id}`} >
                                        <img className={styles.film_img} src={posterPath} alt={movie.title} data-id={movie.id} />
                                    </NavLink>
                                    <h3 className={styles.film_name}>{movie.title}</h3>
                                    <div className={styles.film_stat}>
                                        <p className={styles.film_description}>
                                            {movie.genre_ids.map(genre => {
                                                return (
                                                    <span key={Shortid.generate()}>{genre}</span>
                                                );
                                            })}
                                            | {movie.release_date}
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </>
        );
    };
};

MovieGallery.defaultProps = {
    poster_path: noPoster
};

MovieGallery.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            poster_path: PropTypes.string,
            title: PropTypes.string.isRequired,
            genre_ids: PropTypes.arrayOf(
                PropTypes.number.isRequired
            ),
            release_date: PropTypes.string.isRequired
        })
    ),
    onChangePath: PropTypes.func
};

export default MovieGallery;