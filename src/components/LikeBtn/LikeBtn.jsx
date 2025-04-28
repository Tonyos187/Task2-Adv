import React from 'react'
import Styles from './LikeBtn.module.css'
const LikeBtn = ({text}) => {
    return (
        <div className={Styles.LikeBtn}>{text}</div>
    )
}

export default LikeBtn