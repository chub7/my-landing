import React from 'react';
import styles from './Title.module.scss'

export const Title:React.FC<{text:string}> = ({text}) => {
    return (
        <div className={styles.title}>
            <h2>{text}</h2>
        </div>

    )
};

