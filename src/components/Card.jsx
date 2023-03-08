import React from "react";
import styles from './Card.module.css';

const Card = ({show, movie}) => {
    return (
        <div className={styles.card}>
            <div className={styles.item}>Tu serie favorita es: {show}</div>
            <div className={styles.item}>Tu película favorita es: {movie}</div>
        </div>
    )
}

export default Card;