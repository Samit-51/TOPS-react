import React from 'react';
import styles from './Events.module.css';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const eventsData = {
    recent: [
        {
            id: 1,
            title: "Annual Science Fair",
            date: "February 25, 2025",
            location: "School Auditorium",
            description: "Our students showcased impressive scientific projects and experiments at the annual science fair, demonstrating their creativity and innovative thinking.",
            image: "https://placehold.co/600x400",
            imageAlt: "Science Fair",
            actionText: "View Gallery →",
            actionLink: "#"
        },
        {
            id: 2,
            title: "Inter-School Sports Competition",
            date: "February 20-22, 2025",
            location: "School Playground",
            description: "Our school hosted a three-day sports competition with neighboring schools, featuring football, basketball, and track events. Our team won multiple medals!",
            image: "https://placehold.co/600x400",
            imageAlt: "Sports Day",
            actionText: "View Results →",
            actionLink: "#"
        },
        {
            id: 3,
            title: "Cultural Arts Festival",
            date: "February 15, 2025",
            location: "School Multipurpose Hall",
            description: "Students performed traditional dances, music, and theatrical performances celebrating our cultural diversity. Parents and community members joined in celebration.",
            image: "https://placehold.co/600x400",
            imageAlt: "Cultural Program",
            actionText: "View Highlights →",
            actionLink: "#"
        }
    ],
    ongoing: [
        {
            id: 1,
            title: "Student Art Exhibition",
            date: "March 1-7, 2025",
            location: "School Gallery",
            description: "View artwork created by our talented students across all grades. The exhibition is open to parents and the public from 9:00 AM to 4:00 PM daily.",
            image: "https://placehold.co/600x400",
            imageAlt: "Art Exhibition",
            actionText: "Learn More →",
            actionLink: "#"
        },
        {
            id: 2,
            title: "Annual Book Fair",
            date: "February 28 - March 5, 2025",
            location: "School Library",
            description: "Explore thousands of books across various genres and subjects. Special discounts for students. Guest authors will be present for book signings and discussions.",
            image: "https://placehold.co/600x400",
            imageAlt: "Book Fair",
            actionText: "View Schedule →",
            actionLink: "#"
        },
        {
            id: 3,
            title: "Coding Challenge Week",
            date: "March 1-8, 2025",
            location: "Computer Lab",
            description: "Students compete in daily coding challenges to develop problem-solving skills. Open to all grades with age-appropriate tasks. Prizes will be awarded at the closing ceremony.",
            image: "https://placehold.co/600x400",
            imageAlt: "Coding Challenge",
            actionText: "Join Challenge →",
            actionLink: "#"
        }
    ],
    upcoming: [
        {
            id: 1,
            title: "Science Expedition",
            date: "March 15, 2025",
            location: "National Science Museum",
            description: "Grades 8-10 will visit the National Science Museum for an educational tour. Permission forms must be signed by parents before March 10th.",
            image: "https://placehold.co/600x400",
            imageAlt: "Science Exhibition",
            actionText: "Register Now →",
            actionLink: "#"
        },
        {
            id: 2,
            title: "Parent-Teacher Conference",
            date: "March 20-21, 2025",
            location: "School Classrooms",
            description: "Meet with teachers to discuss your child's academic progress. Schedule appointments online through the parent portal. Time slots available from 8:00 AM to 4:00 PM.",
            image: "https://placehold.co/600x400",
            imageAlt: "Parent Teacher Meeting",
            actionText: "Schedule Meeting →",
            actionLink: "#"
        },
        {
            id: 3,
            title: "Annual School Day Celebration",
            date: "March 30, 2025",
            location: "School Auditorium",
            description: "Join us for our biggest celebration of the year featuring student performances, award ceremonies, and special guest speakers. All parents and alumni are cordially invited.",
            image: "https://placehold.co/600x400",
            imageAlt: "Annual Day",
            actionText: "Get Tickets →",
            actionLink: "#"
        }
    ]
};

const EventCard = ({ event, category }) => {
    const labelText = category.charAt(0).toUpperCase() + category.slice(1);
    return (
        <div className={styles.eventCard} style={{ position: 'relative' }}>
            {category === "ongoing" ? (
                <span className={styles["eventlable-lableongoing"]}>{labelText}</span>
            ) : category === "recent" ? (
                <span className={styles["eventlable-lablerecent"]}>{labelText}</span>
            ) : (
                <span className={styles["eventlable-lableupcoming"]}>{labelText}</span>
            )}
            <img src={event.image} alt={event.imageAlt} />
            <div className={styles.eventCardContent}>
                <h3>{event.title}</h3>
                <div className={styles.eventDate}>
                    <FaCalendarAlt color='#3498db' />
                    <span>{event.date}</span>
                </div>
                <div className={styles.eventLocation}>
                    <FaMapMarkerAlt color='#e74c3c' />
                    <span>{event.location}</span>
                </div>
                <p>{event.description}</p>
                <a href={event.actionLink} className={styles.readMore}>{event.actionText}</a>
            </div>
        </div>
    );
};

const EventsSection = ({ title, events, category }) => {
    return (
        <div className={styles.eventsSection}>
            <h2>{title}</h2>
            <div className={styles.eventCards}>
                {events.map(event => (
                    <EventCard key={event.id} event={event} category={category} />
                ))}
            </div>
        </div>
    );
};

const EventsPage = () => {
    return (
        <section className={styles.main}>
            <div className={styles.eventsContainer}>
                <EventsSection title="Recent Events" events={eventsData.recent} category="recent" />
                <EventsSection title="Ongoing Events" events={eventsData.ongoing} category="ongoing" />
                <EventsSection title="Upcoming Events" events={eventsData.upcoming} category="upcoming" />
            </div>
        </section>
    );
};

export default EventsPage;