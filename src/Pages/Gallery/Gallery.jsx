import React, { useState, useRef } from "react";
import styles from "./Gallery.module.css";


const GalleryPictures = {
    title1: Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        image: `https://placehold.co/600x400?text=Title1+Photo${i + 1}`,
        alt: `TOPS school event photo ${i + 1}`,
    })),
    title2: Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        image: `https://placehold.co/600x400?text=Title2+Photo${i + 1}`,
        alt: `TOPS school event photo ${i + 1}`,
    })),
    title3: Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        image: `https://placehold.co/600x400?text=Title3+Photo${i + 1}`,
        alt: `TOPS school event photo ${i + 1}`,
    })),
    title4: Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        image: `https://placehold.co/600x400?text=Title4+Photo${i + 1}`,
        alt: `TOPS school event photo ${i + 1}`,
    })),
};

const PhotoCard = ({ image }) => (
    <div className={styles.imgContainer}>
        <img src={image.image} alt={image.alt} />
    </div>
);

const ImageContainer = ({ titleKey }) => {
    const photos = GalleryPictures[titleKey] || [];
    return (
        <div className={styles.photoGrid}>
            {photos.map((photo) => (
                <PhotoCard key={photo.id} image={photo} />
            ))}
        </div>
    );
};

const Gallery = () => {
    const [selectedTitle, setSelectedTitle] = useState("title1");

    return (
        <div className={styles.galleryContainer}>
            <div className={styles.buttonContainer}>
                {Object.keys(GalleryPictures).map((title) => (
                    <button
                        key={title}
                        onClick={() => setSelectedTitle(title)}
                        className={`${styles.button} ${
                            selectedTitle === title ? styles.activeButton : ""
                        }`}
                    >
                        {title.toUpperCase()}
                    </button>
                ))}
            </div>

            <ImageContainer titleKey={selectedTitle} />
        </div>
    );
};

export default Gallery;
