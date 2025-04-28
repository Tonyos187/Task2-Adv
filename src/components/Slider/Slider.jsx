import React, { useEffect, useState } from "react";
import styles from "./Slider.module.css";
import TestCard from "../TestCard/TestCard";

const Slider = ({ array, smallArray }) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [display, setDisplay] = useState(window.innerWidth >= 992);

    useEffect(() => {
        const handleResize = () => {
            setDisplay(window.innerWidth >= 992);
            setCurrentIndex(1);
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const activeArray = display ? array : smallArray;

    const fullSlides = [
        activeArray[activeArray.length - 1],
        ...activeArray,
        activeArray[0],
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => prev - 1);
    };

    useEffect(() => {
        if (!isTransitioning) {
            const timeout = setTimeout(() => {
                setIsTransitioning(true);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [isTransitioning]);

    const handleTransitionEnd = () => {
        if (currentIndex === fullSlides.length - 1) {
            setIsTransitioning(false);
            setCurrentIndex(1);
        } else if (currentIndex === 0) {
            setIsTransitioning(false);
            setCurrentIndex(fullSlides.length - 2);
        } else {
            setIsTransitioning(true);
        }
    };

    return (
        <div className={styles.slider}>
            <button className={styles.btn} onClick={prevSlide}>
                <img src="/assets/icons/Slider/Vector (Stroke) (2).svg" alt="Previous" />
            </button>

            <div className={styles.slideContainer}>
                <div
                    className={styles.slidesTrack}
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: isTransitioning ? "transform 0.25s ease-in-out" : "none",
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {fullSlides.map((group, index) => (
                        <div className={styles.slide} key={index}>
                            {Array.isArray(group) ? (
                                group.map((item, subIndex) => (
                                    <TestCard key={subIndex} {...item} />
                                ))
                            ) : (
                                <TestCard key={index} {...group} />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <button className={styles.btn} onClick={nextSlide}>
                <img src="/assets/icons/Slider/Vector (Stroke).svg" alt="Next" />
            </button>

            <div className={styles.mobileBtns}>
                <button className={styles.btn2} onClick={prevSlide}>
                    <img src="/assets/icons/Slider/Vector (Stroke) (2).svg" alt="Previous" />
                </button>

                <button className={styles.btn2} onClick={nextSlide}>
                    <img src="/assets/icons/Slider/Vector (Stroke).svg" alt="Next" />
                </button>
            </div>
        </div>
    );
};


export default Slider;
