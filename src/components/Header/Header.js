import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';

import styles from './Header.module.css';

class Header extends Component {
    state = {}

    componentDidMount() {
        if (this.props.props.match.url.length <= 8) {
            this.props.props.onChangePath(this.props.props.match.url);
        };
    };

    render() {
        return (
            <header className={styles.header}>
                <Navigation 
                    props={this.props}
                />
            </header>
        );
    };
};

export default Header;