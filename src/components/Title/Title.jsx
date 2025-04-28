import Styles from './Title.module.css'
import LikeBtn from '../LikeBtn/LikeBtn'
const  Title = ({btntext, title, text }) => {
    return (
        <div className={Styles.title}>
            <LikeBtn text={btntext} />
            <div className={Styles.titleContainer}>
                <h3 className={Styles.titleText}>{title}</h3>
                <p className={Styles.text}>{text}</p>
            </div>
        </div>

    )
}

export default Title