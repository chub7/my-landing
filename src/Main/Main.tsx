import React from 'react';
import styles from './Main.module.css'
import containerStyle from './../Common/css/Container.module.css'


export const Main = () => {
    return (
        <div className={styles.main}>
            <div className={containerStyle.container}>
            <div className={styles.text}>
                <h1 className={styles.mainTitle}>Hello world</h1>
                <span className={styles.fullName}>Dimitry</span>
                <p className={styles.descriptionMain}>Landing portfolio</p>
            </div>
            <div className={styles.photo}></div>
            </div>

        </div>
    );
};

