import React from 'react';
import styles from './Skills.module.scss'
import containerStyle from './../Common/css/Container.module.css'
import {SkillEach} from "./SkillEach";
import {Title} from "../Common/components/title/Title";
import reactICO from "../assets/reactICO.png"
import reduxICO from "../assets/reduxICO.png"
import jsICO from "../assets/jsICO.png"
import sassICO from "../assets/sassICO.png"


export const Skills = () => {
    const reactIMG = {
        backgroundImage: `url(${reactICO})`,
    };
    const reduxIMG = {
        backgroundImage: `url(${reduxICO})`,
    };
    const jsIMG = {
        backgroundImage: `url(${jsICO})`,
    };
    const sassIMG = {
        backgroundImage: `url(${sassICO})`,
        objectFit: `cover`
    };
    return (
        <div className={styles.skillsWrapper}>
            <div className={`${containerStyle.container} + ${styles.skillsContainer}`}>
                <div>
                    <Title text={`Skills`}/>
                </div>
                <div className={styles.skills}>
                    <SkillEach style={jsIMG} title={'JS'}/>
                    <SkillEach style={sassIMG} title={'SASS'}/>
                    <SkillEach style={reactIMG} title={'React'}/>
                    <SkillEach style={reduxIMG} title={'Redux'}/>
                </div>
            </div>

        </div>
    );
};

