import Styles from './Hero.module.css'
import Circle from '../Circle/Circle'
const Hero = () => {
    return (
        <section className={Styles.heroContainer}>
            <div className={Styles.heroImageContainer}>
                <img className={Styles.heroImage} src="/assets/imgs/Hero/image_2025-04-23_04-51-04.webp" alt="Hero Image" />
                <img className={Styles.heroImage2} src="/assets/imgs/Hero/image_2025-04-23_04-51-46.webp" alt="Hero Image2" />

                <Circle className={Styles.circle1} />
                <Circle className={Styles.circle2} />
                <Circle className={Styles.circle3} />
                <Circle className={Styles.circle4} />
            </div>
            <div className={Styles.heroContent}>
                <div className={Styles.textContent}>
                    <p className={Styles.contentText1}>Welcome to Little Learners Academy</p>
                    <h2 className={Styles.contentTitle}>Where Young Minds Blossom and <span className={Styles.coloredTitle}>Dreams Take Flight.</span></h2>
                    <p className={Styles.contentText2}>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
                </div>
                <div className={Styles.heroNumberContainer}>
                    <div className={Styles.heroNumberDiv}>
                        <p className={Styles.heroNumber}>+7000</p>
                        <p className={Styles.heroNumberText}>Students Passed Out</p>
                    </div>
                    <div className={Styles.heroNumberDiv}>
                        <p className={Styles.heroNumber}>+37</p>
                        <p className={Styles.heroNumberText}>Awards & Recognitions</p>
                    </div>
                    <div className={Styles.heroNumberDiv} style={{ paddingBottom: 0, borderBottom: "none" }}>
                        <p className={Styles.heroNumber}>+15</p>
                        <p className={Styles.heroNumberText}>Experience Educators</p>
                    </div>
                    

                </div>
            </div>
        </section>
    )
}

export default Hero