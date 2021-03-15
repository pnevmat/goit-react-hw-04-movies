import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchMovies from './SearchMovies/SearchMovies';

import styles from './Navigation.module.css';

const Navigation = ({props}) => {
    console.log("Navigation props", props);
    const navContainerClasses = `${styles.container} ${styles.nav_container}`;
    const {pathname} = props.props.history.location;
    console.log("Navigation pathname", pathname);
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
                    {pathname === "/movies" || pathname === `/movies/${props.props.match.params.movieId}` ?
                        <li className={styles.nav_item}>
                            <NavLink to={"/"} className={styles.library_link}>Go back</NavLink>
                        </li> : null
                    }
                </ul>
                <SearchMovies onSubmit={props.onSubmit} />
            </div>
        </div>
    );
};

export default Navigation;