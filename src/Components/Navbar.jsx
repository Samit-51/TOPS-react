import React, { useState, useRef } from "react";
import { FaBars, FaTimes, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {



    const hamBurgerRef = useRef();

    const toggleHamburger = () => {
        hamBurgerRef.current.classList.toggle('active');
    };



    return (
        <>
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
                            <li>
                                <Link to='/gallery'>Gallery</Link>
                            </li>
                            <li>
                                <Link to = '/entrance'>Entrance Form</Link>
                            </li>
                            <li>
                                <Link to = 'magazine'>Magazine </Link>
                            </li>
                            <li>
                                <Link to = 'results'>Results</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav ref={hamBurgerRef} className="ham-burger-menu">
                    <ul>
                        <li>
                            <button
                                className="ham-burger-button close"
                                onClick={toggleHamburger}
                            >
                                <FaTimes></FaTimes>
                            </button>
                        </li>
                        <li>
                            <Link to = "/gallery">Gallary</Link>
                        </li>
                        <li>
                            <Link to = '/entrance' style={{ "--i": 1 }}>
                                Entrance Form
                            </Link>
                        </li>
                        <li>
                            <Link to = '/magazine' style={{ "--i": 2 }}>
                                Magazine{" "}
                            </Link>
                        </li>
                        <li>
                            <Link to = '/results' style={{ "--i": 3 }}>
                                Results
                            </Link>
                        </li>
                        <li>
                            <Link to = '/' style={{ "--i": 4 }}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to = '/about' style={{ "--i": 5 }}>
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link to = '/academics' style={{ "--i": 6 }}>
                               Academics
                            </Link>
                        </li>
                        <li>
                            <Link to = '/news' style={{ "--i": 7 }}>
                                News and Notice
                            </Link>
                        </li>
                        <li>
                            <Link to = '/events' style={{ "--i": 8 }}>
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link to = '/ourservices' style={{ "--i": 9 }}>
                                Our services
                            </Link>
                        </li>
                        <li>
                            <Link to =  '/contactus' style={{ "--i": 10 }}>
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <nav className="main-nav">
                <div className="top">
                    <div className="logo">
                        <img src="https://placehold.co/500x500" className="logo-img" />
                        <h1>
                            TOPS <br />
                            School
                        </h1>
                    </div>
                    <div className="ham-burger">
                        <button
                            className="ham-burger-button open"
                            onClick={() => {
                                toggleHamburger();
                            }}
                        >
                            <FaBars></FaBars>
                        </button>
                    </div>
                </div>
                <div className="main-links">
                    <ul>
                        <li>

                            <Link to="/">Home</Link>
                        </li>
                        <li>

                            <Link to="/about">About</Link>
                        </li>
                        <li>

                            <Link to="/academics">Academics</Link>
                        </li>
                        <li>
                            <Link to = '/news'>News and Notice</Link>
                        </li>
                        <li>
                            <Link to="/events">Events</Link>
                        </li>
                        <li>
                            <Link to="/ourservices">Our services</Link>
                        </li>
                        <li>
                            <Link to="/contactus">Contact us</Link>
                        </li>
                        <span className="ham-burger">
                            <button className="ham-burger-button" onClick={toggleHamburger}>
                                <FaBars></FaBars>
                            </button>
                        </span>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;