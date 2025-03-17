import React from 'react';
import styles from './News.module.css';

const News = () => {
  return (
    <section>
      <div className={styles.newsContainer}>
        {/* Main News (Left Section) */}
        <div className={styles.mainNews}>
          <img src="https://placehold.co/800x600" alt="main news" />
          <div className={styles.mainNewsContent}>
            <h2>News Headline</h2>
            <p>News details.</p>
            <span className={styles.date}>February 22, 2025</span>
            <a href="#" className={styles.readMore}>Read more →</a>
          </div>
        </div>
        {/* News Cards (Right Section) */}
        <div className={styles.newsCards}>
          {/* News Card 1 */}
          <div className={styles.newsCard}>
            <img src="https://placehold.co/600x400" alt="1st news" />
            <div className={styles.newsCardContent}>
              <h3>News heading</h3>
              <p>News in details.</p>
              <span className={styles.datee}>February 23, 2025</span>
            </div>
          </div>
          {/* News Card 2 */}
          <div className={styles.newsCard}>
            <img src="https://placehold.co/600x400" alt="Business news" />
            <div className={styles.newsCardContent}>
              <h3>News Headline</h3>
              <p>News in details.</p>
              <span className={styles.datee}>February 22, 2025</span>
            </div>
          </div>
          {/* News Card 3 */}
          <div className={styles.newsCard}>
            <img src="https://placehold.co/600x400" alt="3rd news" />
            <div className={styles.newsCardContent}>
              <h3>News Headline</h3>
              <p>News in details.</p>
              <span className={styles.datee}>February 21, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;