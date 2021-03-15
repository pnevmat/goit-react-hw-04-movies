import React from 'react';

import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <div>
            <span className={styles.error_span}>
                Search result not successful. Enter the correct movie name
            </span>
        </div>
    );
};

export default ErrorMessage;