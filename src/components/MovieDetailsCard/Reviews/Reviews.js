import React, { Component } from 'react';
import ApiService from '../../utils/ApiService';

import styles from './Reviews.module.css';

const apiService = new ApiService();

class Reviews extends Component {
    state = {
        reviews: []
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