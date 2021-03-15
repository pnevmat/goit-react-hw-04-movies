import React from 'react';
import { NavLink } from 'react-router-dom';
import Shortid from 'shortid';

import styles from './MovieGallery.module.css';

const MovieGallery = ({movies}) => {
    const rootPosterPath = `https://image.tmdb.org/t/p/w500`;
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

export default MovieGallery;