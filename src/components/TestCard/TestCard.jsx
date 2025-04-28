import React from 'react';
import styles from './TestCard.module.css'

const TestCard = ({ img, name, description }) => {
    return (
        <div className={styles.testCard}>
            <div className={styles.testCardHeader}>
                <div className={styles.testCardImage}>
                    <img src={img} alt="profile picture" />
                </div>
                <h3 className={styles.testCardName}>{name}</h3>
            </div>

            <img className={styles.testCardStars} src="/assets/imgs/Testimonials/Container.png" alt="Stars" />
            <p className={styles.testCardDescription}>{description}</p>
        </div>
    )
}

export default TestCard