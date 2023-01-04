import React from 'react';
import styles from './Footer.module.scss'
import containerStyle from './../Common/css/Container.module.css'
import {AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin";
import {AiOutlineMail} from "@react-icons/all-files/ai/AiOutlineMail";
import {AiFillGithub} from "@react-icons/all-files/ai/AiFillGithub";
import {FaTelegramPlane} from "@react-icons/all-files/fa/FaTelegramPlane";

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={`${containerStyle.container} + ${styles.footerContainer}`}>
                <h3>Dima G13</h3>
                <div className={styles.social}>
                    <AiFillLinkedin className={styles.socialIco}/>
                    <AiOutlineMail className={styles.socialIco}></AiOutlineMail>
                    <AiFillGithub className={styles.socialIco}></AiFillGithub>
                    <FaTelegramPlane className={styles.socialIco}></FaTelegramPlane>
                </div>
                <h5>© Incubator Corporation. All rights reserved.</h5>
            </div>
        </div>
    );
};

