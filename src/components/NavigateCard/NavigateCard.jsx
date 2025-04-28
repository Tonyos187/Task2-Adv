import Border from '../Border/Border'
import Circle from '../Circle/Circle'
import styles from './NavigateCard.module.css'

const NavigateCard = ({ title, text }) => {
    return (
        <div className={styles.navigateCard}>
            <div className={styles.navigateCardContainer}>
                <div className={styles.navigateCardContent}>
                    <h4 className={styles.navigateCardTitle}>{title}</h4>
                    <div className={styles.navigateCardBorder}>
                        <Border />
                        <Border />
                        <Border />
                        <Border />
                        <Border />
                        <Border />
                        <Circle className={styles.circle1} />
                        <Circle className={styles.circle2} />
                    </div>
                </div>
                <p className={styles.navigateCardText}>{text}</p>
                <button className={styles.navigateCardButton}>
                    <span className={styles.navigateCardButtonText}>Learn More</span>
                    <div className={styles.navigateCardButtonArrow}>
                        <img src="/assets/icons/Slider/Vector (Stroke).svg" alt="arrow" />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default NavigateCard