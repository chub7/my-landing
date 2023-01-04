import React from 'react';
import styles from './Nav.module.scss'
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <NavLink className={styles.link} to={'/main'}>Home</NavLink>
            <NavLink className={styles.link} to={'/skills'}>Skills</NavLink>
            <NavLink className={styles.link} to={'/projects'}>Projects</NavLink>
            <NavLink className={styles.link} to={'/contact'}>Contact</NavLink>
        </div>
    );
};

