import Styles from './Circle.module.css';

const Circle = ({ className = '' }) => {
    return (
        <div className={`${Styles.circle} ${className}`}></div>
    );
};

export default Circle;