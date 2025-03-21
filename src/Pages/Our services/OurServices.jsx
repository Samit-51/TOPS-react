import React from "react";
import styles from "./OurServices.module.css"; 

const OurServices = () => {
  return (
    <div className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Services</h2>
        <div className={styles.mid}>
          <div className={styles.service}>
            <img
              src="https://placehold.co/600x400"
              alt="Computer Lab"
              className={styles["service-img"]} 
            />
            <div className={styles["service-text"]}> 
              <h3>Computer Lab</h3>
              <p>
                Our state-of-the-art computer lab is equipped with the latest
                technology and software. Students have access to high-speed
                internet and modern computers for research, assignments, and
                computer science classes.
              </p>
            </div>
          </div>

          <div className={styles.service}>
            <img
              src="https://placehold.co/600x400"
              alt="Cafeteria"
              className={styles["service-img"]} 
            />
            <div className={styles["service-text"]}>
              <h3>Cafeteria</h3>
              <p>
                The school cafeteria provides nutritious and delicious meals for
                students and staff. We offer a variety of menu options including
                vegetarian choices. Our cafeteria focuses on balanced nutrition
                while maintaining high standards of hygiene.
              </p>
            </div>
          </div>

          <div className={styles.service}>
            <img
              src="https://placehold.co/600x400"
              alt="Transportation"
              className={styles["service-img"]} 
            />
            <div className={styles["service-text"]}> 
              <h3>Transportation</h3>
              <p>
                We provide safe and reliable transportation services for
                students. Our fleet of buses covers various routes throughout
                the city, ensuring safe commuting with experienced drivers and
                attendants.
              </p>
            </div>
          </div>

          <div className={styles.service}>
            <img
              src="https://placehold.co/600x400"
              alt="Sports Facilities"
              className={styles["service-img"]} 
            />
            <div className={styles["service-text"]}> 
              <h3>Sports Facilities</h3>
              <p>
                Our school offers excellent sports facilities including a
                playground, basketball court, and indoor games area. We
                encourage students to participate in sports activities to
                develop fitness, teamwork, and sportsmanship.
              </p>
            </div>
          </div>

          <div className={styles.service}>
            <img
              src="https://placehold.co/600x400"
              alt="Internet Facilities"
              className={styles["service-img"]} 
            />
            <div className={styles["service-text"]}> 
              <h3>Internet Facilities</h3>
              <p>
                The school provides high-speed internet access throughout the
                campus. Students can access educational resources and learning
                platforms while maintaining safe and secure browsing standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
