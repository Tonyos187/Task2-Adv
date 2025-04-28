import Styles from './Benefits.module.css'
import Title from '../Title/Title'
const Benefits = () => {
    const cards = [
        { img: "/assets/icons/Benefits/Union.svg", title: "Holistic Learning Approach", text: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education." },
        { img: "/assets/icons/Benefits/Vector.svg", title: "Experienced Educators", text: "Our passionate and qualified teachers create a supportive and stimulating learning environment." },
        { img: "/assets/icons/Benefits/Vector (1).svg", title: "Nurturing Environment", text: "We prioritize safety and provide a warm and caring atmosphere for every child." },
        { img: "/assets/icons/Benefits/Vector (Stroke).svg", title: "Play-Based Learning", text: "We believe in the power of play to foster creativity, problem-solving skills, and imagination." },
        { img: "/assets/icons/Benefits/Vector (Stroke) (2).svg", title: "Individualized Attention", text: "Our small class sizes enable personalized attention, catering to each child's unique needs." },
        { img: "/assets/icons/Benefits/Union (1).svg", title: "Parent Involvement", text: "We foster a strong parent-school partnership to ensure seamless communication and collaboration." },
    ];

    return (
        <section className={Styles.benefitsSection}>
            <Title btntext="Children Deserve Bright Future" title="Our Benefits" text="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future." />
            <div className={Styles.benefitsContainer}>
                {cards.map((card, index) => (
                    <div className={Styles.benefitCard} key={index}>
                        <div className={Styles.benefitCardImg}>
                            <img src={card.img} alt={card.title} />
                        </div>
                        <div className={Styles.benefitCardContent}>
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Benefits