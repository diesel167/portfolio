import React from 'react';
import MyPDF from '../files/cv2.pdf';

const About = () => {
  return (
      <div className='abc'>
        <div className="main about"/>
        <div className="aboutMe">
          <h3>Yury Misiyevich</h3>
          <p>Looking for a front-end developer position.
            I’m looking for a front-end developer position.
            I have commercial experience of front-end development,
            early completed projects by myself and completed
            several courses include 0.5-year front-end course by
            The Rolling Scopes (EPAM). Also:</p>
          <ul>
            <li>Working as front-end developer since nov 2020 till now</li>
            <li>Have worked for 5 years as civil engineer</li>
            <li>Graduated from the university in the top 7 in faculty.</li>
            <li>Live in Minsk, Belarus for 26 years</li>
            <li>Like photography, hockey, building</li>
          </ul>
          <a href={MyPDF} target="_blank" rel='noopener noreferrer'>Download CV</a>
        </div>
      </div>
  );
};

export default About;