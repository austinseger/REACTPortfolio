import React from 'react';
import resume from '../assets/resume.pdf';  // Adjust the path as needed

function Resume() {
  return (
    <section>
      <a href={resume} download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
      </ul>
    </section>
  );
}

export default Resume;
