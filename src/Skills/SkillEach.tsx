import React from 'react';
import styles from './SkillEach.module.css'

export const SkillEach = (props:any) => {
    return (
        <div className={styles.skillEach}>
            <div className={styles.skillPic}></div>
            <h3>{props.title}</h3>
            <span>Search for the keywords to learn more about each warning.To ignore</span>
        </div>
    );
};

