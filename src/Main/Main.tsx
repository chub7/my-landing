import React from 'react';
import styles from './Main.module.scss'
import containerStyle from './../Common/css/Container.module.css'
import avatar from '../assets/avatar.jpg'


export const Main = () => {
    return (
        <section>
            <div className={styles.main}>
                <div className={containerStyle.container}>
                    <div className={styles.text}>
                        <h1 className={styles.mainTitle}>Hello, world!</h1>
                        <span className={styles.fullName}>My name is Dima.</span>
                        <p className={styles.descriptionMain}>That is my portfolio</p>
                    </div>
                    <div className={styles.photo}>
                        <img src={avatar} className={styles.avatar}/>
                    </div>
                </div>

            </div>
        </section>
    );
};

