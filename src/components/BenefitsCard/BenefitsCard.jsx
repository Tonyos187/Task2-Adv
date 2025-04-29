import Styles from "./BenefitsCard.module.css";

const BenefitsCard = ({ img, title, text }) => {
    return (
        <div className={Styles.benefitCard}>
            <div className={Styles.benefitCardImg}>
                <img src={img} alt={title} />
            </div>
            <div className={Styles.benefitCardContent}>
                <h3 className={Styles.benefitCardTitle}>{title}</h3>
                <p className={Styles.benefitCardText}>{text}</p>
            </div>
        </div>
    )
}

export default BenefitsCard