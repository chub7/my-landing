import React from 'react';
import styles from './Footer.module.css'
import containerStyle from './../Common/css/Container.module.css'

export const Footer = () => {
    return (
        <div className={styles.footer}>
           <div className={`${containerStyle.container} + ${styles.footerContainer}`}>
               <h3>Dima G13</h3>
                <div className={styles.social}>
                    <div className={styles.socialIco}></div>
                    <div className={styles.socialIco}></div>
                    <div className={styles.socialIco}></div>
                    <div className={styles.socialIco}></div>
                </div>
               <h5>© Incubator Corporation. All rights reserved.</h5>
           </div>
        </div>
    );
};

