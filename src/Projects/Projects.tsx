import React from 'react';
import styles from './Projects.module.scss'
import containerStyle from './../Common/css/Container.module.css'
import {ProjectEach} from "./ProjectEach";
import {Title} from "../Common/components/title/Title";
import socialICO from "../assets/socialICO.jpg"
import todoICO from "../assets/TodoICO.png"

export const Projects = () => {
    const socialIMG = {
        backgroundImage: `url(${socialICO})`,
    };
    const todoIMG = {
        backgroundImage: `url(${todoICO})`,
    };

    return (
        <div className={styles.projectsWrapper}>
            <div className={`${containerStyle.container} + ${styles.projectsContainer}`}>
                <Title text={`Projects`}/>
                <div className={styles.projects}>
                    <ProjectEach titleProject={'Social NetWork'}
                                 descriptionProject={'A dedicated website or other application which enables users to communicate with each other by posting information, comments, messages, images, etc.'}
                                 style={socialIMG}
                    />
                    <ProjectEach titleProject={'My ToDoList'}
                                 descriptionProject={'A list of errands and other tasks – often written on a piece of paper as a memory aid – that one needs or intends to accomplish.'}
                                 style={todoIMG}
                    />
                </div>

            </div>
        </div>
    )
};

