import React from 'react';
import Project from '../components/Project';
import project1 from '../assets/project1.jpg';  

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: project1,
      deployedLink: 'https://your-project1.com',
      githubLink: 'https://github.com/your-project1',
    },
  ];

  return (
    <section>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;
