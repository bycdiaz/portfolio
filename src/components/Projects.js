import React from 'react';
import projectList from "../json/projectList";
import "../styles/projects.css";

function Projects() {
  return (
    <div className="projects">
      {
        projectList.map(project => {
          return (
            <div className="project" key={project['projectName']}>
              <h2 className="project-name">{project['projectName']}</h2>
              <h3 className="project-description">{project['description']}</h3>
              <h3 className="project-description">{project['madeWith']}</h3>
              <div className="project-links">
                <a 
                  href={project['repoLink']}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Repository
                </a>
                <a 
                  href={project['liveLink']}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live View
                </a>
              </div>
              <img
                className="project-image"
                src={project['image']}
                alt={`${project['projectName']} screenshot`}
              ></img>
            </div>
          )
        })
      }
    </div>
  );
}

export default Projects;
