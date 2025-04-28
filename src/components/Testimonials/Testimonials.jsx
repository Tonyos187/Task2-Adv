import Slider from '../Slider/Slider'
import Title from '../Title/Title'
import Styles from './Testimonials.module.css'
const slides = [
    [
        { img: "/assets/imgs/Testimonials/Icon.png", name: "Jennifer B", description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
        { img: "/assets/imgs/Testimonials/Icon (1).png", name: "David K", description: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment." },
        { img: "/assets/imgs/Testimonials/Icon (2).png", name: "Emily L", description: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers." }
    ],

];

const slidesSml = [
    { img: "/assets/imgs/Testimonials/Icon.png", name: "Jennifer B", description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
    { img: "/assets/imgs/Testimonials/Icon (1).png", name: "David K", description: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment." },
    { img: "/assets/imgs/Testimonials/Icon (2).png", name: "Emily L", description: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers." }
];

const Testimonials = () => {
    return (
        <section className={Styles.testimonialsSection}>
            <Title btntext="Their Happy Words 🤗" title="Our Testimonials" text="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally." />
            <Slider array={slides} smallArray={slidesSml} />
        </section>
    )
}

export default Testimonials