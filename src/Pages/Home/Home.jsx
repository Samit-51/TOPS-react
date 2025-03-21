import React, { useState, useEffect } from "react";
import carouselImg from "/src/assets/1920x1080.svg";
import schoolIMG from '../../assets/schoolIMG.jpg';
import img1 from "/src/assets/img1.jpg";
import img2 from "/src/assets/img2.jpg";
import img3 from "/src/assets/img3.jpg";
import img4 from "/src/assets/img4.jpg";
import img5 from "/src/assets/img5.jpg";
import imageTwo from "/src/assets/400x400.svg";
import styles from './Home.module.css';
import img6 from "/src/assets/img6.jpg";
import { CircleUser } from 'lucide-react';
import { GraduationCap } from "lucide-react";
import { Star } from "lucide-react";
const images = [
    schoolIMG,
    img6,
    img1,
    img2,
    img3,
    img4,
    img5,
];

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalID, setintervalID] = useState(null);
    let [btn, setBtn] = useState(false);

    const resetInterval = () => {
        if (intervalID) {
            clearInterval(intervalID);
        }

        const newIntervalID = setInterval(nextSlide, 2000);
        setintervalID(newIntervalID);
    }

    const handledotClick = (dotIndex) => {
        setCurrentIndex(dotIndex);
        resetInterval();
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 2000);
        setintervalID(interval);
        return () => {
            clearInterval(interval);
            if (intervalID) {
                clearInterval(intervalID);
            }
        }
    }, []);

    return (
        <>
            <div className={styles.carouselContainer}>
                <div className={styles.carouselWrapper}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`${styles.carouselSlide} ${index === currentIndex ? styles.active : ""}`}
                            style={{
                                transform: `translateX(${100 * (index - currentIndex)}%)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                        >
                            <img src={image} alt={`Slide ${index + 1}`} className={styles.carouselImage} />
                        </div>
                    ))}
                    {
                        <div className={styles.slideCounter}>
                            {images.map((_, dotIndex) => (
                                <span
                                    key={dotIndex}
                                    className={`${styles.dot} ${dotIndex === currentIndex ? styles.activeDot : ""}`}
                                    onClick={() => handledotClick(dotIndex)}
                                ></span>
                            ))}
                        </div>
                    }
                </div>

                <button className={styles.prev} onClick={prevSlide}>
                    ❮
                </button>
                <button className={styles.next} onClick={nextSlide}>
                    ❯
                </button>
            </div>

            <div className={styles.divOne}>
                <div>
                    <h1 className={styles.headingOne}>"Education for Discipline and Excellence"</h1>
                    <p className={styles.paraOne}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quae
                        provident accusamus ipsum, vitae aliquam dignissimos consectetur
                        doloremque saepe dolore, pariatur asperiores eveniet aut repellat?
                    </p>
                </div>
                <div className={styles.imageOne}>
                    <img src={schoolIMG} alt="TOPS-school-image" />
                </div>
            </div>

            <div className={styles.middiv}>
                <div className={styles.lowdiv}>
                    <div className={styles.headingTwo}>
                        <h1>School Leadership Messages</h1>
                    </div>

                    {btn === false ? (
                        <div className={styles.divTwo}>
                            <img src={imageTwo} alt="TOPS-school-principle's-image" />
                            <div className={styles.divfour}>
                                <p className={styles.paraTwo}>
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                    ducimus magnam nobis minima odit maxime, sit aspernatur amet
                                    doloribus odio harum voluptatibus fugit officia quas iure ipsa
                                    omnis similique at."
                                </p>
                                <p className={styles.principalName}>XYZ ABC</p>
                                <p className={styles.principal}>-Principal</p>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.divTwo}>
                            <img src={imageTwo} alt="TOPS-school-chairman's-image" />
                            <div className={styles.divfour}>
                                <p className={styles.paraTwo}>
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                    ducimus magnam nobis minima odit maxime, sit aspernatur amet
                                    doloribus fugit officia quas iure ipsa
                                    omnis similique at."
                                </p>
                                <p className={styles.principalName}>XYZ ABC</p>
                                <p className={styles.principal}>-Chairman</p>
                            </div>
                        </div>
                    )}
                    <div className={styles.btndv}>
                        <button onClick={() => setBtn(!btn)} className={btn ? styles.chairman : ''}>Principal's Message</button>
                        <button onClick={() => setBtn(!btn)} className={btn === false ? styles.chairman : ''}>Chairman's Message</button>
                    </div>
                </div>
            </div>

            <div className={styles.featuresContainer}>
                <h1>Our Features</h1>
                <div className={styles.featuresList}>
                    <div className={styles.featureItem}>
                        <CircleUser size = {50} style={{ color: 'black',fill: 'white', marginBottom:'-10px'}}/>
                        <h3 style = {{fontSize: '30px'}}> 280K+ </h3>
                        <p style = {{ fontSize:'20px' , color : 'black', marginTop:'-15px'}}>Our Happy Students</p>
                    </div>
                    <div className={styles.featureItem}>
                        <GraduationCap size = {50} style={{ color: 'black',fill: 'white',  marginBottom:'-10px' }}/>
                        <h3 style = {{fontSize: '30px'}}> 20+ </h3>
                        <p style = {{ fontSize:'20px' , color : 'black'}}>Expert Instructor</p>
                    </div>
                    <div className={styles.featureItem}>
                        <Star size = {50} style={{ color: 'black',fill: 'white',  marginBottom:'-10px'}}/>
                        <h3 style = {{fontSize: '30px'}}>98%</h3>
                        <p style = {{ fontSize:'20px' , color : 'black' }}>Satisfaction Rate</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;