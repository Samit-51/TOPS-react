import React from 'react';
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <>
      <section className={styles.contactSection}>
        <div className={styles.formContainer}>
          <h1>Reach us</h1>
          <form>
            <input style={{ gridArea: 'Name' }} type="text" placeholder="Name" />
            <input style={{ gridArea: 'E-mail' }} type="email" placeholder="E-mail" />
            <input style={{ gridArea: 'Ph' }} type="tel" placeholder="Contact no" />
            <input style={{ gridArea: 'Subject' }} type="text" placeholder="Subject" />
            <textarea 
              style={{ gridArea: 'ta' }} 
              rows="4" 
              cols="40" 
              placeholder="Enter your message."
            />
          </form>
          <button>Send Message</button>
        </div>
        <div className={styles.info}>
          <div className={styles.emailAddress}>
            <h1>
              <span style={{ marginRight: "17px" }}>  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed" style = {{fill:"black", height:"50px" , marginTop:'25px' }}>	
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                </svg>
              </span> 
              Email address
            </h1>
            <p> topsenglishschool@gmail.com</p>
          </div>
          <div className={styles.phone}>
            <h1>
              For any query{" "}
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed" style = {{fill:"black", height:"50px" , marginTop:'20px' }}>
                  <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                </svg>
              </span>
            </h1>
            <br />
            <p>061-578382</p>
          </div>
        </div>
      </section>
      
      {/* Google Map Section */}
      <section className={styles.mapSection}>
        <h1 className={styles.mapTitle}>Our Location</h1>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.95373531531612!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8a32f7f8c8e!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2us!4v1631234567890!5m2!1sen!2us"
            allowFullScreen=""
            loading="lazy"
            title="Our Location"
            width={1200}
            height={400}
          />
        </div>
      </section>
    </>
  );
};

export default Contact;