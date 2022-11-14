import React from 'react';
import styles from './Contants.module.css'
import containerStyle from './../Common/css/Container.module.css'


export const Contacts = () => {
    return (
        <div className={styles.Contacts}>
            <div className={`${containerStyle.container} + ${styles.contactContainer}`}>
                <h2>Contacts</h2>
                <form className={styles.form}>
                    <input/>
                    <input/>
                    <textarea className={styles.textarea}>

                </textarea>
                </form>
                <div>Send</div>

            </div>

        </div>

    );
};

