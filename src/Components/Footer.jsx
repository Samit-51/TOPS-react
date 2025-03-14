import React, { useState, useEffect, useRef } from 'react';
import { FaEnvelope ,FaPhone, FaMap, FaSearchLocation, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const [popupContent, setPopupContent] = useState({
    title: '',
    text: '',
    imgSrc: ''
  });

  const serviceData = {
    'computer-lab': {
      title: 'Computer Lab',
      text: 'Our state-of-the-art computer lab provides students with access to the latest technology for their educational needs.',
      imgSrc: 'https://placehold.co/500x300'
    },
    'cafeteria': {
      title: 'Cafeteria',
      text: 'Our cafeteria offers nutritious and delicious meals prepared in a hygienic environment.',
      imgSrc: 'https://placehold.co/500x300'
    },
    'transportation': {
      title: 'Transportation',
      text: 'We provide safe and reliable transportation services for our students with routes covering major areas.',
      imgSrc: 'https://placehold.co/500x300'
    },
    'sports': {
      title: 'Sports',
      text: 'Our school offers various sports facilities to encourage physical fitness and teamwork among students.',
      imgSrc: 'https://placehold.co/500x300'
    },
    'internet': {
      title: 'Use of Internet',
      text: 'We provide high-speed internet access for educational purposes to enhance learning opportunities.',
      imgSrc: 'https://placehold.co/500x300'
    }
  };

  useEffect(() => {
    if (showPopup && popupRef.current) {
      const timer = setTimeout(() => {
        popupRef.current.classList.add('active');
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const openPopup = (service) => {
    setPopupContent(serviceData[service]);
    setShowPopup(true);
  };

  const closePopup = () => {
    if (popupRef.current) {
      popupRef.current.classList.remove('active');
      
      setTimeout(() => {
        setShowPopup(false);
      }, 300); 
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h3>PGPEB School</h3>
          <div className="social-icons">
            <a href="#"><FaFacebook></FaFacebook></a>
            <a href="#"><FaInstagram></FaInstagram></a>
            <a href="#"><FaYoutube></FaYoutube></a>
            <a href="#"><FaTwitter></FaTwitter></a>
          </div>
          <h4>Address</h4>
          <p>Somewhere, Near</p>
          <h4>Call Us</h4>
          <p>01-7878787<br />01-7979797</p>
        </div>
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li><span className="service-link" onClick={() => openPopup('computer-lab')}>Computer Lab</span></li>
            <li><span className="service-link" onClick={() => openPopup('cafeteria')}>Cafeteria</span></li>
            <li><span className="service-link" onClick={() => openPopup('transportation')}>Transportation</span></li>
            <li><span className="service-link" onClick={() => openPopup('sports')}>Sports</span></li>
            <li><span className="service-link" onClick={() => openPopup('internet')}>Use of Internet</span></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Our Programmes</h3>
          <ul>
            <li>Secondary School</li>
            <li>Extra-curricular Activities</li>
            <li>Academic Excellence</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Principal's message</a></li>
            <li><a href="#">Chairman's message</a></li>
            <li><a href="#">Know us</a></li>
            <li><a href="#">Executive Board</a></li>
            <li><a href="#">Admission Procedure</a></li>
            <li><a href="#">Achievements</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><FaEnvelope className='contact-icon'></FaEnvelope> info@tops.edu.np</p>
          <p><FaPhone className='contact-icon'></FaPhone> 01-7878787</p>
          <p><FaMap className='contact-icon'></FaMap> Thapathana, Parbhat</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 TOPS School. All Rights Reserved.</p>
      </div>
      
      <div 
        ref={popupRef} 
       className='popup-overlay'
        style={{ display: showPopup ? 'flex' : 'none' }}
      >
        <div className="popup-content">
          <div className="popup-header">
            <h3>{popupContent.title}</h3>
            <button className="popup-close" onClick={closePopup}>&times;</button>
          </div>
          <div className="popup-body">
            <div className="popup-image">
              <img src={popupContent.imgSrc} alt={`${popupContent.title} Image`} />
            </div>
            <div className="popup-text">
              {popupContent.text}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;