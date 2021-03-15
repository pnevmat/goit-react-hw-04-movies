import React, { Component } from 'react';
import ApiService from '../../utils/ApiService';

import styles from './Reviews.module.css';

const apiService = new ApiService();

class Reviews extends Component {
    state = {
        reviews: [{
            author: "Gimly",
            content: "I actually don't hate Johnny Knoxville, but this was never gonna appeal to me. Cute bear though.↵↵_Final rating:★½: - Boring/disappointing. Avoid where possible._",
            created_at: "2018-10-04T07:35:08.617Z",
            id: "5bb5c2ac0e0a2633a70097a5",
            updated_at: "2018-10-05T14:54:23.490Z",
            url: "https://www.themoviedb.org/review/5bb5c2ac0e0a2633a70097a5"
        }]
    };

    componentDidMount() {
        apiService.movieId = this.props.match.params.movieId;
        apiService.fetchFilmsReviews().then(reviews => {
            this.setState({reviews});
        });
    }

    render() {
        const {reviews} = this.state;
        return (
            <ul className={styles.reviewsContainer}>
                {reviews.map(review => {
                    return (
                        <li className={styles.reviewItem} key={review.id}>
                            <p className={styles.reviewerName}>Author: {review.author}</p>
                            <p className={styles.reviewText}>{review.content}</p>
                        </li>
                    )
                })}
            </ul>
        );
    };
};

export default Reviews;