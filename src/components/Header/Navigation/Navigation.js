import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchMovies from './SearchMovies/SearchMovies';

import styles from './Navigation.module.css';

const Navigation = ({props}) => {
    const navContainerClasses = `${styles.container} ${styles.nav_container}`;
    const {pathname} = props.props.history.location;
    return (
        <div className={navContainerClasses}>
            <div className={styles.header_container}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>
                        <NavLink exact to="/" id="home" className={styles.home_link} activeClassName={styles.current}>Home</NavLink>
                    </li>
                    {pathname === "/" &&
                        <li className={styles.nav_item}>
                            <NavLink to="/movies" className={styles.library_link} activeClassName={styles.current}>Movies</NavLink>
                        </li>
                    }
                    {pathname === "/movies" 
                        || pathname === `/movies/${props.props.match.params.movieId}` 
                        || pathname === `/movies/${props.props.match.params.movieId}/cast` 
                        || pathname === `/movies/${props.props.match.params.movieId}/reviews` ?
                        <li className={styles.nav_item}>
                            <NavLink to={`${props.props.prevLocation}`} className={styles.library_link}>Go back</NavLink>
                        </li> : null
                    }
                </ul>
                {pathname === "/movies" ? 
                    <SearchMovies onSubmit={props.onSubmit} /> : null
                }
            </div>
        </div>
    );
};

export default Navigation;