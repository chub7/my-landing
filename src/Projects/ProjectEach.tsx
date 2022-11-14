import React from 'react';
import styles from './ProjectEach.module.css'

export const ProjectEach = (props: any) => {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.projectImg}>
                <div className={styles.btnShowProject}>Смотреть</div>
            </div>
            <div className={styles.descriptionProject}>
                <h3>{props.titleProject}</h3>
                <span>{props.descriptionProject}</span>
            </div>
        </div>
    )
};

