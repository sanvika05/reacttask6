import React from 'react';
import simonImage from './images/simonImage.png';
import musicSysImage from './images/musicSysImage.png';
import jsImage from './images/jsImage.png';
import bootstrapImage from './images/bootstrapImage.png';
import htmlImage from './images/htmlImage.png';
import cssImage from './images/cssImage.png';

const Projects = () => {
  const projectList = [
    { id: 1, title: 'Simon game', link: '', image: simonImage  },
    { id: 2, title: 'Music System', link: '', image: musicSysImage },
    { id: 3, title: 'JavaScript', link: '', image: jsImage },
    { id: 4, title: 'Bootstrap', link: '', image: bootstrapImage },
    { id: 5, title: 'HTML', link: '', image: htmlImage },
    { id: 6, title: 'CSS', link: '', image: cssImage },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map(project => (
          <div key={project.id} className="project">
            <h3>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <img
              className="project-image"
              src={project.image}
              alt={project.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;