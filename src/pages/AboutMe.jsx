import React from 'react';
import avatar from '../assets/avatar.jpg';  // Adjust the path as needed

function AboutMe() {
  return (
    <section>
      <img src={avatar} alt="Developer" />
      <p>Short bio about the developer.</p>
    </section>
  );
}

export default AboutMe;
