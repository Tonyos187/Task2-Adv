import LikeBtn from '../LikeBtn/LikeBtn'
import Title from '../Title/Title'
import Styles from './FAQ.module.css'
import FAQCard from '../FAQCard/FAQCard'
const FAQ = () => {
    const faqData = [
        { question: "What are the school hours at Little Learners Academy?", answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up." },
        { question: "How do you handle food allergies and dietary restrictions?", answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up." },
        { question: "Is there a uniform policy for students?", answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up." },
        { question: "What is the teacher-to-student ratio at Little Learners Academy?", answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up." },
        { question: "Is there a uniform policy for students?", answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up." },
        { question: "How do you handle discipline and behavior management?", answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up." },
        { question: "What extracurricular activities are available for students?", answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up." },
        { question: "How do I apply for admission to Little Learners Academy?", answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up." },
    ]
    const evenFaqs = faqData.filter((_, index) => index % 2 === 0);
    const oddFaqs = faqData.filter((_, index) => index % 2 !== 0);
    return (
        <section className={Styles.faqSection}>
            <Title btntext="Solutions For The Doubts" title="Frequently Asked Questions" text="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education." />
            <div className={Styles.faqContainer}>
                <div className={Styles.leftColumn}>
                    {evenFaqs.map((faq, index) => (
                        <FAQCard question={faq.question} answer={faq.answer} key={index} />
                    ))}
                </div>

                <div className={Styles.rightColumn}>
                    {oddFaqs.map((faq, index) => (
                        <FAQCard question={faq.question} answer={faq.answer} key={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ