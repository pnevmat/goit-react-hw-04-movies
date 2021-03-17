import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from './ErrorMessage/ErrorMessage';

import sprite from './sprite.svg';
import styles from './SearchMovies.module.css';

class SearchMovies extends Component {
    state = {
        inputValue: '',
        submit: false
    };

    onInputChange = (e) => {
        this.setState({inputValue: e.target.value});
    };

    render() {
        const {onSubmit} = this.props;
        return (
            <>
                <div className={styles.input_container}>
                    <div className={styles.input_wrap}>
                        <form 
                            id="search-form-js"
                            onSubmit={e => {
                                e.preventDefault();
                                const {value} = e.target.elements.query;
                                e.target.elements.query.value = '';
                                this.setState({submit: true});
                                return onSubmit(value);
                            }}
                        >
                            <input
                                type="text"
                                name="query"
                                autoComplete="off"
                                className={styles.header_input}
                                placeholder="Search films"
                                onChange={e => {this.onInputChange(e)}}
                            />
                            <svg width="12" height="12" className={styles.input_icon}>
                                <use href={sprite + "#icon-search"}></use>
                            </svg>
                            <button className={styles.submit_button} type="submit">Search</button>
                        </form>
                    </div>
                </div>
                {this.state.inputValue === '' && this.state.submit === true &&
                    <ErrorMessage />
                }
            </>
            
        );
    };
};

SearchMovies.propTypes = {
    onSubmit: PropTypes.func
}

export default SearchMovies;