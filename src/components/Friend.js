import React from 'react';
import style from '../css/bottomAround.module.css'

const Friend = ({friend, pos}) => {
    let styles = 'col-4 p-1 ';
    if (pos === 7) {
        styles += `${styles} ${style.bottomleft}`
    }
    if (pos === 9) {
        styles += `${styles} ${style.bottomright}`
    }
    return (
        <img className={styles} src={friend} alt="friend"/>
    );
};

export default Friend;