import React from 'react';
import './LandingPage.css'; // You can define your CSS styles in this file
import { FaCheckCircle } from 'react-icons/fa'; // Importing icons from react-icons library

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to Journalistic Journey</h1>
        <p>Unlock the secrets of journalism with Mr. Arun</p>
      </header>
      <section className="about-section">
        <h2>About Mr. Arun</h2>
        <p>Mr. Arun is a seasoned journalist with over 30 years of experience in the field. Throughout his career, he has covered a wide range of topics and has worked with renowned publications. Now, he's eager to share his knowledge and insights with aspiring journalists like you.</p>
      </section>
      <section className="course-details">
        <h2>Course Details</h2>
        <div className="course-card">
          <div className="card">
            <FaCheckCircle className="icon" />
            <p>Learn from real-world examples</p>
          </div>
          <div className="card">
            <FaCheckCircle className="icon" />
            <p>Interactive sessions with Mr. Arun</p>
          </div>
          <div className="card">
            <FaCheckCircle className="icon" />
            <p>Hands-on assignments</p>
          </div>
          <div className="card">
            <FaCheckCircle className="icon" />
            <p>Exclusive access to resources</p>
          </div>
          <div className="card">
            <FaCheckCircle className="icon" />
            <p>Opportunities for networking</p>
          </div>
          <div className="card">
            <FaCheckCircle className="icon" />
            <p>Guidance on modern tools and technologies</p>
          </div>
          <div className="card">
            <FaCheckCircle className="icon" />
            <p>Potential career growth prospects</p>
          </div>
        </div>
        <p>Don't miss this opportunity to kickstart your career in journalism!</p>
      </section>
      <section className="cta-section">
        <h2>Ready to embark on your journalistic journey?</h2>
        <button className="enroll-btn">Enroll Now</button>
      </section>
      <footer>
        <p>&copy; 2024 Journalistic Journey - All rights reserved</p>
      </footer>
    </div>
  );
}

export default LandingPage;
