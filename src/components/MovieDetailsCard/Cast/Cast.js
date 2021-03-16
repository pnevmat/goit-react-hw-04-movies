import React, { Component } from 'react';
import ApiService from '../../utils/ApiService';

import profilePhotoPlaceholder from './profilePhotoPlaceholder.webp';
import styles from './Cast.module.css';

const apiService = new ApiService();

class Cast extends Component {
    state = {
        actors: []
    };

    componentDidMount() {
        apiService.movieId = this.props.match.params.movieId;
        apiService.fetchFilmsActors().then(actors => {
            this.setState({actors: actors.cast});
        });
    }
    
    render() {
        const {actors} = this.state;
        return (
            <ul className={styles.castContainer}>
                {actors.map(actor => {
                    return (
                        actor.profile_path !== null ?
                        <li className={styles.castItem} key={actor.cast_id}>
                            <img className={styles.profileImage} src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
                            <p className={styles.actorsName}>Name: {actor.name}</p>
                            <p className={styles.actorsRole}>Role name: {actor.character}</p>
                        </li> :
                        <li className={styles.castItem} key={actor.cast_id}>
                            <img className={styles.profileImage} src={`${profilePhotoPlaceholder}`} alt={actor.name} />
                            <p className={styles.actorsName}>Name: {actor.name}</p>
                            <p className={styles.actorsRole}>Role name: {actor.character}</p>
                        </li>
                    )
                })}
            </ul>
        );
    }
};

export default Cast;