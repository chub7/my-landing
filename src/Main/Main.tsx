import React from 'react';
import styles from './Main.module.css'
import containerStyle from './../Common/css/Container.module.css'


export const Main = () => {
    return (
        <div className={styles.main}>
            <div className={containerStyle.container}>
            <div className={styles.text}>
                <h1>Hello world</h1>
                <span>Dimitry</span>
                <p>Landing portfolio</p>
            </div>
            <div className={styles.photo}></div>
            </div>

        </div>
    );
};

