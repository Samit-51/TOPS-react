import React, { useState, useEffect } from "react";
import carouselImg from "/src/assets/1920x1080.svg";
import imageOne from "/src/assets/600x400.svg";
import imageTwo from "/src/assets/400x400.svg";

import "./Home.css";

const images = [
    carouselImg,
    carouselImg,
    carouselImg,
    carouselImg,
    carouselImg,
    carouselImg,
];

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    let [btn, setBtn] = useState(false);
  
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
      return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
                            style={{
                                transform: `translateX(${100 * (index - currentIndex)}%)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                        >
                            <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
                            
                            <div className="slide-counter">
                                {images.map((_, dotIndex) => (
                                    <span
                                        key={dotIndex}
                                        className={`dot ${dotIndex === currentIndex ? "active-dot" : ""}`}
                                        onClick={() => setCurrentIndex(dotIndex)}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <button className="prev" onClick={prevSlide}>
                    ❮
                </button>
                <button className="next" onClick={nextSlide}>
                    ❯
                </button>
            </div>
            
            <div className="divOne">
                <div>
                    <h1 className="headingOne">"Education for Discipline and Excellence"</h1>
                    <p className="paraOne">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quae
                        provident accusamus ipsum, vitae aliquam dignissimos consectetur
                        doloremque saepe dolore, pariatur asperiores eveniet aut repellat?
                    </p>
                </div>
                <div className="imageOne">
                    <img src={imageOne} alt="No Image Found" />
                </div>
            </div>

            <div className="middiv">
                <div className="lowdiv">
                    <div className="headingTwo">
                        <h1>School Leadership Messages</h1>
                    </div>

                    {btn === false ? (
                        <div className="divTwo">
                            <img src={imageTwo} alt="No Image Found" />           
                            <div className="divfour">
                                <p className="paraTwo">
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                    ducimus magnam nobis minima odit maxime, sit aspernatur amet
                                    doloribus odio harum voluptatibus fugit officia quas iure ipsa
                                    omnis similique at."
                                </p>
                                <p className="principal-name">XYZ ABC</p>
                                <p className="principal">-Principal</p>
                            </div>
                        </div>
                    ) : (
                        <div className="divTwo">
                            <img src={imageTwo} alt="No Image Found" />           
                            <div className="divfour">
                                <p className="paraTwo">
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                    ducimus magnam nobis minima odit maxime, sit aspernatur amet
                                    doloribus fugit officia quas iure ipsa
                                    omnis similique at."
                                </p>
                                <p className="principal-name">XYZ ABC</p>
                                <p className="principal">-Chairman</p>
                            </div>
                        </div>
                    )}
                    <div className="btndv">
                        <button onClick={() => setBtn(!btn)} className={btn ? 'chairman' : ''}>Principal's Message</button>
                        <button onClick={() => setBtn(!btn)} className={btn === false ? 'chairman' : ''}>Chairman's Message</button>
                    </div>
                </div>
            </div>

            <div className="features-container">
                <h1>Our Features</h1>
                <div className="features-list">
                    <div className="feature-item">
                        <h3>Quality Education</h3>
                        <p>Our school provides the best education with modern techniques.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Experienced Teachers</h3>
                        <p>Highly skilled teachers who make learning fun and effective.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Best Infrastructure</h3>
                        <p>Well-equipped classrooms, labs, and sports facilities.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;