import React from "react";
import "../styles/About.css"; // CSS import
import profileImage from "../assets/profile.jpg"; // Import the image

const About = () => {
  return (
    <section id="about" className="about-section">
     
      <div className="about-text-container">
      <img
        src={profileImage}
        alt="Profile"
        className="about-image"
      />
      <h2 className="about-heading">About Me</h2>
      <p className="about-text">
      I am an aspiring front end web developer with a foundation in full-stack development and a proven ability to adapt and learn in dynamic environments. I am highly motivated and enthusiastic, with a professional athletics career that demonstrates exceptional dedication, resilience, and the ability to overcome challenges. <br></br>I pride myself on being an excellent problem-solver and work well collaborating with others.  My experience across diverse roles including coaching, event coordination, and motivational speaking has strengthened my skills in communication and fostering meaningful relationships. <br></br>My goal is not only to bring technical skills but also teamwork, passion and a growth mindset to a development team. <br></br>Representing Australia on 11 occasions and competing on the world stage requires immense commitment, discipline and a goal orientated mindset.
Being able to stay composed, perform under pressure and be resilient are essential qualities in being able to compete at such a high level.
I lived in Japan for two years,  where I competed professionally for a completely non English speaking Japanese company, which again drew upon my adaptability and problem solving skills (and ability to pick up a whole new language without any background in it!)
      </p>
      </div> 
    </section>
  );
};

export default About;