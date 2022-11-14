import React from 'react';
import styles from './Projects.module.css'
import containerStyle from './../Common/css/Container.module.css'
import {ProjectEach} from "./ProjectEach";


export const Projects = () => {
    return (
        <div className={styles.projectsWrapper}>
            <div className={`${containerStyle.container} + ${styles.projectsContainer}`}>
                <h2 className={styles.title}>My projects</h2>
                <div className={styles.projects}>
                    <ProjectEach titleProject={'My first Project'}
                                 descriptionProject={'WARNING in [eslint]src Project ProjectEach.tsx Line 3:8: containerStyle is defined but never used  @typescript-eslint/no-unused-vars'}/>
                    <ProjectEach titleProject={'My seccond Project'}
                                 descriptionProject={'WARNING in [eslint]src Project ProjectEach.tsx Line 3:8: containerStyle is defined but never used  @typescript-eslint/no-unused-vars'}/>
                </div>

            </div>
        </div>
    )
};

