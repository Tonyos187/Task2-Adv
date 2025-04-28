import NavigateCard from '../NavigateCard/NavigateCard'
import Title from '../Title/Title'
import styles from './Navigate.module.css'

const Navigate = () => {
    const navigateCards = [
        {
            title: 'About Us',
            text: 'Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.'
        },
        {
            title: 'Academics',
            text: 'Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.'
        },
        {
            title: 'Student Life',
            text: 'Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.'
        },
        {
            title: 'Admissions',
            text: 'Learn about our Enrollment Process and how to secure your child\'s place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.'
        },

    ]
    return (
        <div className={styles.navigate}>
            <Title btntext="Explore More" title="Navigate through our Pages" text="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school" />
            <div className={styles.navigateContainer}>
                {navigateCards.map((card, index) => (
                    <NavigateCard key={index} title={card.title} text={card.text} />
                ))}
            </div>
        </div>
    )
}

export default Navigate