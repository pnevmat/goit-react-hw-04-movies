import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';

import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Shortid from 'shortid';

import noPoster from './no_poster.png';
import styles from './MovieDetailsCard.module.css';

const MovieDetailsCard = (props) => {
    const posterPath = `https://image.tmdb.org/t/p/w500${props.movieDetails.poster_path}`;
    const {original_title, vote_average, vote_count, popularity, genres, overview} = props.movieDetails;
    const aboutTitleClasses = `${styles.movie__title} ${styles.movie_title_h2}`;
    return (
        <div className={styles.movie}>
            <img src={posterPath} alt={original_title} className={styles.movie__cover} />
            <div className={styles.movie__containerInfo}>
                <h1 className={styles.movie__title}>{original_title}</h1>
                <ul className={styles.movie__characteristics}>
                    <li>
                        <span className={styles.movie_characteristics_title}>Vote / Votes</span>
                        <span className={styles.movie_characteristics_orange}>{vote_average}</span>
                        &nbsp;/&nbsp;
                        <span className={styles.movie_characteristics_grey}>{vote_count}</span>
                    </li>
                    <li>
                        <span className={styles.movie_characteristics_title}>Popularity</span>
                        <span className={styles.movie_characteristics_black}>{popularity}</span>
                    </li>
                    <li>
                        <span className={styles.movie_characteristics_title}>Original Title</span>
                        <span className={styles.movie_characteristics_black}>{original_title}</span>
                    </li>
                    <li>
                        <span className={styles.movie_characteristics_title}>Genre</span>
                        {genres !== undefined && genres.map((genre, index) => {
                            return (
                                <span className={styles.movie_characteristics_black} key={Shortid.generate()}>
                                    {genres.length !== index + 1 ? `${genre.name},` : `${genre.name}`}
                                </span>
                            )
                        })}
                    </li>
                </ul>
                <h2 className={aboutTitleClasses}>About</h2>
                <div>
                    <p className={styles.movie__description}>{overview}</p>
                </div>
                <div className={styles.buttonContainer}>
                    <NavLink to={`${props.props.match.url}/cast`} className={styles.castLink} activeClassName={styles.active}>Cast</NavLink>
                    <NavLink to={`${props.props.match.url}/reviews`} className={styles.reviewsLink} activeClassName={styles.active}>Reviews</NavLink>
                </div>
                <Route path="/movies/:movieId/cast" component={Cast} />
                <Route path="/movies/:movieId/reviews" component={Reviews} />
            </div>
        </div>
    );
};

MovieDetailsCard.defaultProps = {
    poster_path: noPoster,
    original_title: 'Film title',
    vote_average: 'Vote average',
    vote_count: 'Vote count',
    popularity: 'Popularity',
    release_date: 'Release date'

};

MovieDetailsCard.propTypes = {
    movieDetails: PropTypes.shape({
        poster_path: PropTypes.string,
        original_title: PropTypes.string,
        vote_average: PropTypes.number,
        vote_count: PropTypes.number,
        popularity: PropTypes.number,
        genres: PropTypes.arrayOf(
            PropTypes.object.isRequired
        ),
        release_date: PropTypes.string
    })
};

export default MovieDetailsCard;