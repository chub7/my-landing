import React from 'react';
import styles from './ProjectEach.module.scss'

export const ProjectEach = (props: any) => {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.projectImg} style={props.style}>
            </div>
            <div className={styles.descriptionProject}>
                <h3 className={styles.projectTitle}>{props.titleProject}</h3>
                <span className={styles.descriptionTitle}>{props.descriptionProject}</span>
                <div className={styles.btnShowProject}>Show</div>
            </div>
        </div>
    )
};

