import React from 'react';
import styles from './SkillEach.module.css'

export const SkillEach = (props:any) => {
    return (
        <div className={styles.skillEach} >

            <div className={styles.skillPic} style={props.style}>

            </div>
            <span className={styles.descriptionSkill}>Search for the keywords to learn.To ignore</span>

        </div>
    );
};

