import React, { useState, useRef } from 'react';
import { FaBars, FaTimes, FaEnvelope, FaPhone } from 'react-icons/fa'

const Navbar = () => {
    const hamBurgerRef = useRef();

    const toggleHamburger = () => {
        hamBurgerRef.current.classList.toggle('active');
    };

    return (
        <header>
            <nav className="top-nav">
                <div className="contacts">
                    <div className="ph-number">
                        <FaPhone></FaPhone>
                        <span className="phoneNumber1">061-111111</span>|
                        <span className="phoneNumber2">222222</span> |
                        <span className="phoneNumber3">333333</span>
                    </div>
                    <div className="e-mail">
                        <FaEnvelope></FaEnvelope>
                        <span className="eMail">example123@gmail.com</span>
                    </div>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="#">Gallary</a></li>
                        <li><a href="#">Entrance Form</a></li>
                        <li><a href="#">Magazine </a></li>
                        <li><a href="#">Results</a></li>
                    </ul>
                </div>
            </nav>
            <nav className="main-nav">
                <div className="top">
                    <div className="logo">
                        <img src="https://placehold.co/500x500" className="logo-img" />
                        <h1>TOPS <br />School</h1>
                    </div>
                    <div className="ham-burger">
                        <button className="ham-burger-button open" onClick={() => {
                            toggleHamburger();
                        }}>
                            <FaBars></FaBars>
                        </button>
                    </div>
                </div>
                <div className="main-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Academics</a></li>
                        <li><a href="#">News and Notice</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Our services</a></li>
                        <li><a href="#">Contact us</a></li>
                        <span className="ham-burger">
                            <button className="ham-burger-button" onClick={toggleHamburger}>
                                <FaBars></FaBars>
                            </button>
                        </span>
                    </ul>
                </div>
            </nav>

            <nav ref={hamBurgerRef} className="ham-burger-menu">
                <ul>
                    <li>
                        <button className="ham-burger-button close" onClick={toggleHamburger}>
                            <FaTimes></FaTimes>
                        </button>
                    </li>
                    <li><a href="#">Gallary</a></li>
                    <li><a href="#" style={{ '--i': 1 }}>Entrance Form</a></li>
                    <li><a href="#" style={{ '--i': 2 }}>Magazine </a></li>
                    <li><a href="#" style={{ '--i': 3 }}>Results</a></li>
                    <li><a href="#" style={{ '--i': 4 }}>Home</a></li>
                    <li><a href="#" style={{ '--i': 5 }}>About us</a></li>
                    <li><a href="#" style={{ '--i': 6 }}>Admission</a></li>
                    <li><a href="#" style={{ '--i': 7 }}>News and Notice</a></li>
                    <li><a href="#" style={{ '--i': 8 }}>Events</a></li>
                    <li><a href="#" style={{ '--i': 9 }}>Our services</a></li>
                    <li><a href="#" style={{ '--i': 10 }}>Contact us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;