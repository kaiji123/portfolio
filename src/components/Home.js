// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import image from './profile.JPG'
const Home = () => {
  // Experiences data
  const experiences = [
    {
      title: 'Leyuan Assistant Volunteer',
      date: 'Jul 2021 – Aug 2021',
      description: [
        'Communicated with approximately 100 customers per day to ensure their satisfaction.',
        'Created and updated restaurant menus, resulting in a 15% increase in sales.',
        'Reviewed and translated an average of 10 business documents per week for effective communication with the manager.',
      ],
    },
    {
      title: 'Instant Pickup Intern',
      date: 'Sep 2021 – Oct 2021',
      description: [
        'Developed the frontend of the application using React and React Native, improving the user experience.',
        'Cleaned and processed data using Python, making it readable and accessible for analysis.',
        'Adapted to an agile development methodology, resulting in efficient project management and meeting deadlines.',
      ],
    },
    {
      title: 'Sky Software Developer Intern',
      date: 'Jul 2022 – Aug 2022',
      description: [
        'Set up the initial CI/CD pipeline and integration tests, ensuring high code quality and reducing bugs by 30%.',
        'Collaborated with a team of 5 developers using agile methodology and daily standups to deliver projects on time.',
        'Handled data transformation and ingestion for large-scale applications, processing an average of 1TB of data per day.',
        'Containerized applications using Docker, enabling easy deployment and scaling, leading to a 20% reduction in server costs.',
      ],
    },
    {
      title: 'University of Birmingham Teaching Assistant',
      date: 'Feb 2023 – May 2023',
      description: [
        'Provided individual support to 30 students, offering guidance and assistance with coursework and assignments.',
        'Delivered constructive feedback to the instructor, helping to improve the quality of teaching materials and methods.',
        'Organized and conducted lab sessions with an average attendance of 25 students, promoting hands-on learning and practical skills development.',
      ],
    },
  ];



    // Education data
    const education = {
        university: 'University of Birmingham',
        degree: "Bachelor's degree, Computer Science",
        grade: 'First',
        thesis: 'Adaptive Distance Detection and Adaptive Instance Segmentation',
        date: '2020 - 2023',
        courses: [
          'Object-Oriented Programming',
          'Data Structures and Algorithms',
          'Mathematical and Logical Foundations',
          'Artificial Intelligence and Machine Learning',
          'Full Stack Application Development',
          'Theories of Computation',
          'Computer-Aided Verification',
          'Neural Computation',
          'Advanced Algorithms and Complexity',
          'Computer Vision',
        ],
      };

    // Certifications data
  const certifications = [
    {
      title: 'Virtual Experience Program Participant - JPMorgan Chase & Co.',
      date: 'Completion ID: 156516635\nExpires: June 19, 2024',
    },
    {
      title: 'MATLAB Onramp – MathWorks',
      date: 'No expiration date',
    },
    {
      title: 'Google Ads Search Certification',
      date: 'Completion ID: 156516635\nExpires: June 19, 2024',
    },
    {
      title: 'Fundamentals of Digital marketing - Google',
      date: 'No expiration date',
    },
    {
      title: 'Xero advisor certified',
      date: 'Certification date: 03/07/2023\nExpiry date: 12/12/2024',
    },
  ];

  return (
    <section className="home-section">
      <div>
        <h1 className='gradient-text'>Welcome to My Portfolio</h1>
        <img src={image} className='profileimage'/>
        <p>
          Hi, I'm Kai Yi Ji, a passionate developer with experience in front-end technologies like React, HTML, CSS, JavaScript and many more.
        </p>
        <p>
          My skills include problem-solving, team collaboration, and creating user-friendly interfaces.
        </p>
      </div>
      <div>
        <h2>Experiences</h2>
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <h3>{experience.title}</h3>
            <p>{experience.date}</p>
            <ul>
              {experience.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}


        <h2>Education</h2>
        <div className="education-card">
          <h3>{education.university}</h3>
     
          <p><strong>Degree:</strong> {education.degree}</p>
          <p><strong>Grade:</strong> {education.grade}</p>
          <p><strong>Thesis:</strong> {education.thesis}</p>
          
          <p><strong>Date:</strong> {education.date}</p>

          <h3> Courses: </h3>
            <p>            
            {education.courses.map((course, i) => (
              course+ ", "
            ))}
            </p>


        </div>

        <h2>Certifications</h2>
        {certifications.map((certification, index) => (
          <div key={index} className="certification-card">
            <h3>{certification.title}</h3>
            <p>{certification.date}</p>
          </div>
        ))}
      <div className="explore-more">
        <h2>Explore More</h2>
        <Link to="/projects">View Projects</Link>
        <br />
        <Link to="/contact">Get in Touch</Link>
      </div>
      </div>
    </section>
  );
};

export default Home;
