import React from 'react';
import styles from './SkillEach.module.css'

export const SkillEach = (props:any) => {
    return (
        <div className={styles.skillEach}>
            <div className={styles.skillPic}></div>
            <h3 className={styles.titileSkill}>{props.title}</h3>
            <span className={styles.descriptionSkill}>Search for the keywords to learn more about each warning.To ignore</span>
        </div>
    );
};

