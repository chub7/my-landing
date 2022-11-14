import React from 'react';
import styles from './Skills.module.css'
import containerStyle from './../Common/css/Container.module.css'
import {SkillEach} from "./SkillEach";


export const Skills = () => {
    return (
        <div  className={styles.skillsWrapper}>
            <div className={`${containerStyle.container} + ${styles.skillsContainer}`}>
                <h2 className={styles.title}>My skills</h2>
                <div className={styles.skills}>
                    <SkillEach title={'JS'}/>
                    <SkillEach title={'CSS'}/>
                    <SkillEach title={'REACT'}/>
                    <SkillEach title={'REACT'}/>
                    <SkillEach title={'REACT'}/>
                    <SkillEach title={'REACT'}/>
                    <SkillEach title={'REACT'}/>
                    <SkillEach title={'REACT'}/>
                    <SkillEach title={'REACT'}/>
                    <SkillEach title={'REACT'}/>
                </div>
            </div>

        </div>
    );
};

