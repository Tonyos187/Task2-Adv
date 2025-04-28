import { useState } from 'react';
import styles from './FAQCard.module.css'

const FAQCard = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${styles.faqCard} ${isOpen && styles.faqOpen}`}>

            <div className={styles.faqContainer}>

                <div className={styles.faqHeader} onClick={toggleAccordion}>
                    <h3>{question}</h3>
                </div>

                {isOpen && <div className={styles.faqBorder}></div>}
                {isOpen && <div className={`${styles.faqBody} ${isOpen && styles.open}`}>
                    <p>{answer}</p>
                </div>}

            </div>

            <button className={styles.faqToggle} onClick={toggleAccordion}>
                {isOpen ? '-' : '+'}
            </button>
        </div>
    )
}

export default FAQCard