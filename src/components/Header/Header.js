import React from 'react';
import Navigation from './Navigation/Navigation';

import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <Navigation props={props} />
        </header>
    );
};

export default Header;